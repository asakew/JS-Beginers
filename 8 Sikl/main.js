for (var i = 0; i < 10; i++) {
  console.log(i);
}

// for (var i = 0; i < 10; i = i + 2) {...}

// 8-martga qizlarga sovg'a xD
//for (var i = 0; true; i++) {
 // console.log(i);
//}


// 9-dars obxod massiv sikl for
const carNames = ['Kia Seltos', 'Kia Sanata', 'Treker', 'Captiva']

// 3 talik contents
for (var i = 0; i < 3; i++) {
  console.log(carNames[i]);
}

// 3 tadan kup yoki all contents ni chiqorib berish
//for (var i = 0; i < carNames.length; i++) {
//console.log(carNames[i]);
//}


// 10-dars obxod massiv sikl for (of)
const girlsName = ['Madina', 'Munisa', 'Malika', 'Muassar', 'Mubina'];

// item ni urniga xoxlagan suzni yozish mumkin
for (let item of girlsName) {
  console.log(item);
}

// 11-dars obxod massiv sikl forEach()
girlsName.forEach(function (names, i){
  console.log(`${names} => ${i}`);
});

// function ga misol
function printNames(names, i) {
  console.log(`${names} => ${i}`);
}

girlsName.forEach(printNames);

// function ni qisqartirishga misol
girlsName.forEach((names, i) => console.log(`${names} => ${i}`));
