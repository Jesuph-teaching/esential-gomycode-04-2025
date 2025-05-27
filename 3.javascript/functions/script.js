function f(x) {
	return 3 * x + 4;
}

console.log(f(0));
console.log(f(1));
console.log(f(2));

function calculateArea(width, height = 1) {
	return width * height;
}
console.log('Area is ', calculateArea(10, 23), 'm²');
console.log('Area is ', calculateArea(8, 12), 'm²');
function SayHi(name) {
	console.log('Hi ,', name);
}
var teacher = 'Youcef';

SayHi(teacher); // SayHi('Youcef')
// c=12 / a=8 / b=7
function max(a, b, c) {
	let maximum = b; // 7
	if (a > maximum) {
		maximum = a; // 8
	}
	if (c > maximum) {
		maximum = c;
	}
	return maximum;
}
console.log(max(12, 8, 7));
console.log(max(19, 128, 47));
console.log(max(194, 1228, 4007));
// function min(a,b,c){}
const min = function (a, b, c) {
	let minimum = a;
	if (b < minimum) {
		minimum = b;
	}
	if (c < minimum) {
		minimum = c;
	}
	return minimum;
};

console.log(min(1));

const cl = (w, h) => w * h;

var age = 10;
function calculateYear() {
	let title = 'Khalid';
	console.log(age);
}

console.log(age);

var celuleWeight = 0.004;
var celuleArea = 0.004;
var celulePlasma = 0.004;
