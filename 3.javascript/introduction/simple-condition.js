const age = Number(prompt('Enter your age'));

if (age > 18) {
	console.log('rak kbir');
} else if (age > 13) {
	// 18 > age >13
	console.log('You can play this game');
} else {
	// 13>= age
	console.log('You are not allowed');
}
