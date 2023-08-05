const payHour = 80;
const hourOnDay = 5;
const dayOnLeave = (11 - 2) * hourOnDay;
const project = 40;

console.log('Смогу ли взять в работу проект: ' + (project < dayOnLeave));
console.log('Возьму за проект: ' + (project * payHour) + ' долларов');