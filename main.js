/* Beginerlar uchun:
Numbers
qator strong
bolean
null
undefiend
object
massiv

bigin
sumbol - lar keynchalikham urgansa buladi
*/

let userName = 'asakew';

let age = 23;
//let age = null;
let year = 1999;


let uydaSved = true;


// Dinamitiskiy tipazatsiya
let someVariable = 'some value';
someVariable = 50;
someVariable = true; // Boolean

// undefined
let city;

// operator: typeof - kodlarni qaney turga tegishliligini tekshirish uchun ishlatiladi, misol uchun number, text, null...undefined
const lastName = 'Akmal';
// const age = '23';
// console.log(typeof age) - ikkinchi typeof ishlamas ekan

// conlosega max saqlash Number.MAX_SAFE_INTEGER);
// va 90071992547409913637373838n - qilibham chiqorsak bularkan

// console.log(userName,age,year,someVariable,city, typeof lastName, Number.MAX_SAFE_INTEGER);


/* operatorlar: 
>, <, >=, <=
==
===
!=
!==
*/

// true - rost
console.log(5 < 10);
// fasle - yolg'on
console.log(5 > 10);
console.log(5 >= 10);   // fasle
console.log(5 <= 10);   // true


let result = 10 == 5;
console.log(result);

console.log('5' == 5);   // true
console.log('5' === 5);  // false

let num = 8;
console.log(num = 10);


// if va else-lar
// const time = 7;

const time = 20;

if (time > 8) {
    console.log('Tur ish haqida uyla yoki Ishlamisanmi? Maymuni odam qilgan bu Mehnat buladi xD');
} else if (time >= 12 && time < 12) {
    console.log('Abed qilib ol, bul tur uzing haqingdaham uylade');
} else if (time >= 13 && time < 18) {
    console.log('tabiatga qara, biroz dam ol');
} else {
    console.log('Soat 22:00 buldi. dam ol, kamida 7,8 soat uxlawing kk');
}

