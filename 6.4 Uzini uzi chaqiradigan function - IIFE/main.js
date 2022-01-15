(function() {
    console.log('hi');
})();

// keyin demo(); kodiham yozish shart emas))) yozgan taqdirizdaham error chiqadi xD


///////// v2
(function(a,b) {
    console.log(a + b);
})(10,6);


///////// v3
let res = (function(a, b) {
    return a + b;
})(10, 64);

console.log(res);

