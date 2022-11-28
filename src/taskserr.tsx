// Задачи

// 1. Работа с простыми типами
function concat(hello: string, world: string):string {
    return hello +=world;
};
concat('Hello ', 'World');

// 2. Работа с интерфейсами
type ArrDescWithData = Array<string | number> 

interface HomeTask {
    howIDoIt: string,
    simeArray: ArrDescWithData,
    withData: [
        {howIDoIt: string, simeArray: ArrDescWithData},
        {howIDoIt: string, simeArray: ArrDescWithData},
        {howIDoIt: string, simeArray: ArrDescWithData},

    ]
}

const MyHometask: HomeTask = {
    howIDoIt: "I Do It Wel",
    simeArray: ["string one", "string two", 42],
    withData: [
        { howIDoIt: "I Do It Wel", simeArray: ["string one", 23] },
        { howIDoIt: "I Do It Wel", simeArray: ["string one", 23, 24] },
        { howIDoIt: "I Do It Wel", simeArray: ["string one", 23, "string two"] }
    ]
}

console.log(MyHometask);


// 3. Типизация функций, используя Generic
let initialValue: number = 0
const myArray: MyArray<number> = [1,2,3]

interface MyArray<T> {
    [N: number]: T;
    reduce<U>(callbackfn: (acc: T, value: T, index: number, arr: T[]) => U, initialValue?: T): U[]
}

const sum = myArray.reduce((acc, value) => acc + value, initialValue);
console.log(sum);

// 4. Работа с MappedTypes
interface IHomeTask {
    data: string;
    numbericData: number;
    date: Date;
    externalData: {
        basis?: number;
        value: string;
    }
}

type MyPick<T, K extends keyof T> = {
  [N in K]: T[N] 
}

const homeTask: MyPick<IHomeTask, 'externalData'> = {
    externalData: {
        value: 'win'
    }
}

