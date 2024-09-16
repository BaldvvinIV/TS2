let first: boolean = true;
let second: boolean = false;
let third: boolean = true;
first = false;
second = true;
third = false;
// Получилось только менять на тру или фолс т.к в булиане есть только 2 значения

let number1: number = 1;
let number2: number = 2;
let number3: number = 3;
number1 = 2;
number2 = 3;
number3 = 1;

// Значения меняются только в рамках того же типа

let str1: string = "Hello";
let str2: string = "World";
let str3: string = "Hello";
str1 = "World";
str2 = "Hello";
str3 = "World";

// Значения меняются только в рамках типа строки

let Null1: null = null;
let Null2: null = null;
let Null3: null = null;
Null1 = null;
Null2 = null;
Null3 = null;

// Значения меняются только в рамках типа null

let Undefined1: undefined = undefined;
let Undefined2: undefined = undefined;
let Undefined3: undefined = undefined;
Undefined1 = undefined;
Undefined2 = undefined;
Undefined3 = undefined;

// Значения меняются только в рамках типа undefined

let Void1 = (): void => {
    console.log("Hello");
}

let Void2 = (): void => {
    console.log("World");
 return;
}

//Ретурн можно писать если не присваивать ему значение (Тоесть есть он или нет не будет разницы в данном случае т.к. простой ретурн не возвращает ничего)