const N = 100;

for (let i = 0; i <= N; i++) {
	if (i % 2 === 1) {
		console.log(i);
	}
}

let t = 7;
for (let i = 0; i <= 10; i++) {
	let result = i * t;
	console.log(`${t} x ${i} = ${result}`);
}

// sum of N =  0+1+2+3+4+5+6+.....+N
// SUM = SUM +1
// SUM = SUM +2
// SUM = SUM +3
// SUM = SUM +4
let sum = 0;
for (let i = 1; i < N; i++) {
	sum += i;
}
console.log(sum);

// fact of N = 1 * 2 * 3 * 4 *....* N

let fact = 1;
const X = 5;
for (let i = 2; i <= X; i++) {
	fact = fact * i; //  5! = 4! * 5
	// fact *=i;
}
console.log(fact);
let y = 3;
while (y < 3) {
	if (y % 2 === 1) {
		y += 1;
	} else {
		y += 3;
	}
	console.log(y);
}
console.log('final', y);
y = 3;
do {
	if (y % 2 === 1) {
		y += 1;
	} else {
		y += 3;
	}
	console.log(y);
} while (y < 3);
