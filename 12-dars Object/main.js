// oddiy misol
let ism = 'Akmal';
let yosh = 23;
let sevganQizi = false;

// 2-misol
const chalaDasturchi = {
  ism: 'Akmal',
  yosh: 23,
  sevganQizi: false,
  profession: 'Dizayner'
}

console.log(chalaDasturchi);
console.log(chalaDasturchi.ism);
console.log(chalaDasturchi['profession']);

let propertyName = 'profession';
console.log(chalaDasturchi[propertyName]);

// add object
chalaDasturchi.shahar = 'Kattaqurgon shahar';
console.log(chalaDasturchi);

// delete object
delete chalaDasturchi.yosh;
console.log(chalaDasturchi);


