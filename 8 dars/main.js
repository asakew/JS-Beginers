// return va agrument-lar
function summ(a, b) {
    const result = a + b;
    console.log(result);
}

summ(10, 15);


////////////// v2
function summ2(a, b) {
    const result = a + b;
    return result;
}

// summ(son, son); console-ga yozish kerak buladi.
summ2(15, 15);


////////////// v3
function summ3(a, b) {
    const result = a + b;
    return result;
    // return-dan keyin xech qanday kod ishlamaydi
}

let res = summ3(20, 15);
console.log(res);


////////////// v4 agrument qisqartirish
function summ4(a, b) {
    // const result = a + b;
    return a + b;
}

console.log(summ4(30, 30));


////////////// v4.2 agrument multi variants
function summ5(a, b) {
    // const result = a + b;
    return a + b;
}

const result = summ5(summ5(20, 22), summ5(60, 10))
console.log(result);


////////////// v5 agrument
function summ6(a, b) {
    return a + b;
}

function diff(a, b) {
    return a - b;
}

function test(func) {
    let result = func(80, 20);
    console.log(result);
}

test(summ6);
test(diff)
