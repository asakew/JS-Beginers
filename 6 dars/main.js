// Functions
// DRY - Don't repeat youself

// 1 examples
function userHi() {
    console.log('Hi user');
}

//.userHi();

// Function Declaration
//userHi();
function userHi() {
    alert('hello')
}
// userHi(); js tepadan pastga qarab kodlarni uqiydi va userHi(); yuqoriga yoki pastga bulsaham ishlayveradi.

// Function Experssion
// let, const, var - axamiyati yuq
const userHi = function() {
    alert('hello')
}
userHi(); // esa faqat function-dan keyin ishlaydi