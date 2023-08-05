const projectName = "Сайт магазина";
const price = 2000;
const author = "Василий Пупкин";

// const template = author + 'заказал' + projectName;
// const template = `${author} заказал ${projectName} по цене ${price} долларов`;
const template = `
Заказчик: ${author}
Проект: ${projectName}
Цена: ${price} долларов`;

console.log(template);
