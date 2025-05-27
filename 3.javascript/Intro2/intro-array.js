var students = [12, 19, 22];

console.log(students);
students[0] = 13;
console.log(students);
console.log(students[2]);

let colors = [];
colors[0] = 'red';
colors[5] = 'green';
colors.push('orange');
colors[colors.length] = 'violet';
console.log(colors);

let c = colors.pop();
console.log(c, colors);
