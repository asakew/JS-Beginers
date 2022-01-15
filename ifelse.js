const time = 24;

if (time < 8) {
    console.log('Xayrli tong');
} else if (time >= 9 && time < 18) {
    console.log('Xayrli kun');
} else if (time >= 21 && time < 22) {
    console.log('Xayrli kech');
} else {
    console.log('Xayrli Tun');
}

/* Logichiskiy operatorlar
&& Logichiskiy va
|| Logichiskiy yoki
!true - Logichiskiy yuq
*/


// 4-dars: Ternarniy operatorlar
// kodni qisqartirishga va tez uqishga yordam beradi

// oddadiy kodga misol
if (10 < 21) {
    console.log('21 kattaroq');
} else {
    console.log('Katta emas');
}

// ternarniy operatorlarga misol
10 < 21 ? console.log('21 kattaroq') : console.log('Katta emas');

// v2 oddiy misol
/*
let geeting;
let gtime = 10;

if (gtime < 12) {
    geeting = 'Katta';
} else {
    geeting = 'Kichik'
}

console.log(geeting);
*/

// v2 ternarniy misol
let gtime = 10;
let geeting = gtime < 12 ? 'Katta' : 'Kichik';

console.log(geeting);