
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
    externalData: {
        value: 'win'
    }
}

type MyPartial<T> = {
    [N in keyof T]?: T[N] extends object ? MyPartial <T[N]> : T[N]
}


