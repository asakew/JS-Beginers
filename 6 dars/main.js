// Functions
// DRY - Don't repeat youself

// 1 examples
/*function userHi2() {
    console.log('Hi user');
}

userHi2();

// Function Declaration
//userHi();
function userHi() {
    console.log('test');
}
// userHi(); js tepadan pastga qarab kodlarni uqiydi va userHi(); yuqoriga yoki pastga bulsaham ishlayveradi.
*/
// Function Experssion
// let, const, var - axamiyati yuq
const userHi = function() {
    console.log('hi asa');
}
userHi(); // esa faqat function-dan keyin ishlaydi