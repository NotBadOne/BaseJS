// Проба пера
let name = 'Artem'; // изменяемые
const number = 25; // константы

// НАИМЕНОВАНИЕ

// Правильно
let userName = 'Vasya';
let myClass8 = 8;
let $myVar = 'var';
let _name = 'Anton';

// Не рекомендуется
let user_name = 'Vasya';
let UserName = 'Vasya';

// Нельзя
// let 8myClass = 8;
// let my-Var = 'var';
// let const = '1';

// не начинать переменные с var (устарело)
var oldName = 'name';

// ПЕРЕОПРЕДЕЛЕНИЕ

// Let
let a = 1;
console.log(a);
a = 'Hello!'
console.log(a);

// Const – недопустимо
// const b = 1;
// console.log(b);
// b = 'Hello!'
// console.log(b);