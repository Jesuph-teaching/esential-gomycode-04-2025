var x = 6;
var y = 9;

console.log(x, y);

var temp = x;
x = y;
y = temp;

console.log(x, y);
/*  */
var t = 4;
var u = 'Youcef';
console.log(t, u);
[t, u] = [u, t];
console.log(t, u);
