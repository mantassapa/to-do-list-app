export interface ToDoInter {
    _id?:string;
    title:string;
    description:string;
    start:String;
    end:String;
    added?:Number;
    updated?:Number;
    finished?:boolean;
}[]
export interface ToDoInterForOne {
    _id?:string;
    title:string;
    description:string;
    start:String;
    end:String;
    added?:Number;
    updated?:Number;
    finished?:boolean;
}[]


export interface MainInter{
    toDoData: ToDoInter[];

    setTaskFormEditShow: React.Dispatch<React.SetStateAction<{
        show: number;
        el: {
            _id: string;
            title: string;
            description: string;
            start: string;
            end: string;
            added: number;
            updated: number;
            finished: boolean;
        };
    }>>;

    taskFormEditShow?:{
        show: Number;
        el: ToDoInter;
    };
    setTaskFormShow: React.Dispatch<React.SetStateAction<number>>;
    setGetToDoData: React.Dispatch<React.SetStateAction<Number[]>>;
}



export interface TaskFormShowInter{
    setTaskFormShow: React.Dispatch<React.SetStateAction<number>>;
    taskFormShow:number;
    setTaskFormEditShow: React.Dispatch<React.SetStateAction<{
        show: number;
        el: {
            _id: string;
            title: string;
            description: string;
            start: string;
            end: string;
            added: number;
            updated: number;
            finished: boolean;
        };
    }>>;
    setGetToDoData: React.Dispatch<React.SetStateAction<Number[]>>;
}


export interface TaskFormEditShowInter{
    setTaskFormEditShow: React.Dispatch<React.SetStateAction<{
        show: number;
        el: {
            _id: string;
            title: string;
            description: string;
            start: string;
            end: string;
            added: number;
            updated: number;
            finished: boolean;
        };
    }>>;
    taskFormEditShow:{
        show: Number;
        el: ToDoInter;
    };
    setGetToDoData: React.Dispatch<React.SetStateAction<Number[]>>;
}
