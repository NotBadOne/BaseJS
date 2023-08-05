// ТИПЫ ДАННЫХ

// Примитивы
const age = 18; // число
const surname = 'Иванов'; // строки
const isAdmin = true; // true или false
const isUser = undefined; // не заданное
let data; // не заданное
let myData = null; // пустое значение

const admin = Symbol('Admin'); // уникальное неизменное значение
const big = BigInt(99999999999999); // работа с большими числами

// Примеры:
let a = '5';
let b = 5.6;
let c;

console.log(typeof a);
console.log(typeof b);
console.log(typeof isAdmin);
console.log(typeof c);

// Объекты
const user = {
  name: 'Egor',
  age: 18
}

