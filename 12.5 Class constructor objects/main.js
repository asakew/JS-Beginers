//const kewDasturchi = {
//  ism: 'Akmal',
//  yosh: 23,
//  sevganQizi: false,
//  shahar: 'Kattaqurgon'
//}

//const kewDasturchi2 = {
//  ism: 'Komil',
//  yosh: 23,
//  sevganQizi: false,
//  shahar: 'Samarqand'
//}

// ... umdan kura class qlb yozgan zur...

// Class: constructor lashga misol
class dasturchi {
  constructor(ism, yosh, sevganQizi, shahar) {
    this.ism = ism;
    this.yosh = yosh;
    this.sevganQizi = sevganQizi;
    this.shahar = shahar;
  }
  
  salom(userName) {
    console.log(`Salom ${this.ism} / ${userName}`);
  }
}

const dasturchi1 = new dasturchi (
  'Akmal', 23, true, 'Kattaqurgon shahar'
)
const dasturchi2 = new dasturchi (
  'Komil', 23, false, 'Kattaqurgon tuman'
)
const dasturchi3 = new dasturchi (
  'Jalol', 24, false, 'Samarqand viloyati'
)

console.log(dasturchi1);
dasturchi1.salom('asakew');

console.log(dasturchi2);
dasturchi2.salom('unkown');

console.log(dasturchi3);
