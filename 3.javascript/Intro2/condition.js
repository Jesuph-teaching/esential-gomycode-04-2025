let student1 = 22,
	student2 = 19,
	student3 = 12;

let oldest = student1;

if (student2 > oldest) {
	oldest = student2;
}
if (student3 > oldest) {
	oldest = student3;
}

console.log(oldest);

if (student1 < student2 && student1 < student3) {
	console.log('student 1 is the youngest');
} else if (student2 < student3) {
	console.log('student 2 is the youngest');
} else {
	console.log('student 3 is the youngest');
}

let old = student1 > student2 ? student1 : student2;
