/*
.push(), .pop(), .shift(), unshift(), splice(), .slice(), .forEach(), .indexof(), includes()
*/

/*
arr.push(items) - Massivni oxiriga elemntni qushadi
arr.pop() - Massivni oxiridagi elementni o'chiradi
arr.shift() - Massivni boshlanishidan elemntni o'chiradi
arr.unshift(...items) - Massivni boshida elementni qo'shish
arr.splice([start]], [deleteCount, newElements]) - ...
*/

const carNames = ['Taxo', 'Kia Seltos', 'Treker', 'Captiva'];
console.log(carNames);

// .push misol
carNames.push('Kia Sanata');
console.log(carNames);

// .splice misol: Captivani olib tashlayman
carNames.splice(3, 1);
console.log(carNames);

