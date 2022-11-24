// Задача
// 1. Работа с простыми типами

function concat(hello: string, world: string) {
    return hello +=world;
};
concat('Hello ', 'World');

// 2. Работа с интерфейсами

interface MyHometask {
    howIDoIt: string,
    simeArray: [index: string, index: string, index: number],
    withData: [{ howIDoIt: string, simeArray: [index:string, index:number] }],
};

const obj: MyHometask = {
    howIDoIt: "I Do It Wel",
    simeArray: ["string one", "string two", 42],
    withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }]
};

// 3. Типизация функций, используя Generic

const myArray: Array<number> = [1,2,3];
interface Array<T> {
    (callback: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T;
}

const sum = myArray.reduce((acc, cur) => acc + cur);


// 4. Работа с MappedTypes
interface IHomeTask {
    data: string;
    numbericData: number;
    date: Date;
    externalData: {
        basis: number;
        value: string;
    }
} 

const homeTask: MyPartial<IHomeTask> = {
    data: '2022-11-24',
    numbericData: 1,
    date: new Date(20221124),
    externalData: {
        basis: 123,
        value: 'win'
    }
}

type MyPartial<T> = {
    [N in keyof T]: T[N] extends object ? MyPartial<T[N]> : T[N]
}

