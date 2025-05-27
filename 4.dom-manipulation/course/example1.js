console.log(document.body.children[0].children[0]);

const a = document.getElementsByTagName('a');
console.log(a);

const mygroup = document.getElementsByClassName('mygroup');
console.log(mygroup);
for (const element of mygroup) {
	element.style.color = 'red';
}

const special = document.getElementById('special'); // caputred the element we want to change
console.log(special);

special.style.color = 'pink';
special.style.backgroundColor = 'rgb(23,35,25)';
special.style.padding = '4px';
