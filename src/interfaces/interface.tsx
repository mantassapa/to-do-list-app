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

    setToDoData: React.Dispatch<React.SetStateAction<ToDoInter[]>>;

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
}



export interface TaskFormShowInter{
    setTaskFormShow: React.Dispatch<React.SetStateAction<number>>;
    taskFormShow?:number;
}


export interface TaskFormEditShowInter{
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
    taskFormEditShow:{
        show: Number;
        el: ToDoInter;
    };
}
