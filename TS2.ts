let Array1: number[] = [1, 2, 3, 4, 5];
let Array2: Array<number> = [1, 2, 3, 4, 5];

let strings: string[] = ["Яблоки", "Апельсины", "Бананы"];
let Mix: [string , number , boolean] = ["Яблоки", 5, true];

let Info: [string , string , number]
Info= ["Ramzan" , "Dzhantemirov" , 19]
let Colours: string[]
Colours = ["Red" , "Green" , "Blue"]

function loopForever(): never {
    while (true) {
        console.log("Looping...");
    }
}

let results1:never = "String" // Не получает результата

function throwError(): never {
    throw new Error("Something went wrong");
}

let Object1 = (o: object | null) => {}
Object1({Name: "Шестерка воронов" , Author: "Ли Бардуго" , Year: 2017})
let MyInfo = (o: object | null) => {}
MyInfo({name: "Ramzan" , surname: "Dzhantemirov" , age: 19})
function doNothing(obj: object): void {
  }

let MyFav:any = "Красный"
let Mixing: [any , any , any ] = ["Красный" , 5 , true]
function doNothing1(any: any) {}

type Person = {
    name: string
    age: number
}
let Ramzan: Person = {
    name: "Ramzan",
    age: 19
}

type product = {
    name: string
    price: number 
    Instock: boolean
}
let Agusha: product = {
    name: "Agusha",
    price: 5,
    Instock: true
}
type User = {
    Id: number
    Usernamy: string
    Email: string
}
type account = {
    Id: number
    balance: number
}




