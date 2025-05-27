const student = {
	name: 'Raslane',
	age: 19,
	level: 12,
	'school-classes': '1lv3',
	subjects: {
		german: 18,
		math: 2,
		english: 17,
		french: 19,
		hg: {
			history: 12,
			geography: 16,
		},
	},
	greeting(name) {
		console.log('hello, my friend : ', name);
	},
	presenting: function () {
		// this.age++; // how to modify it self
		console.log(
			`Hello, my name is ${this.name}, and i'm ${this.age} years old`
		);
	},
};
student.age = 18;
student.school = 'Moukrani, Benaknoun';
delete student['school-classes'];
console.log(student);

for (const k in student) {
	if (k === 'age') {
		console.log('i found age in the keys');
	}
	console.log(k, student[k]);
}

const listOfKeys = Object.keys(student);
const listOfValues = Object.values(student);
const listOfEntries = Object.entries(student);
console.log(listOfKeys);
console.log(listOfValues);
console.log(listOfEntries);

console.log(student.subjects.french);
student.greeting('Maria');
student.presenting();
