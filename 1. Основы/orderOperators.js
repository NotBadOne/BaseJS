// Порядок операторов

// Например: const isSuited = box - 10 > size - 5;

// Таблица приоритетов операторов
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table

const isSuited = 100 - 10 > 90 - 5;
console.log(isSuited);

// 100 - 10 (12)
// 90 - 5 (12)
// Потом >

let a = 6 + 10 / 2;
console.log(a);
a = (6 + 10) / 2;
console.log(a);