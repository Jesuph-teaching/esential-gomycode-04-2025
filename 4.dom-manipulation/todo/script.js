const form = document.querySelector('form.todo-form');
const todoList = document.querySelector('ul.todo-list');
let list = [];
form.onsubmit = function (event) {
	event.preventDefault();
	const value = form[0].value;
	form[0].value = '';
	addTodo(value);
};

function addTodo(value) {
	//create a new element
	const newLi = document.createElement('li');
	newLi.innerHTML = value;
	const deleteButton = document.createElement('button');
	deleteButton.textContent = 'x';
	deleteButton.onclick = function () {
		newLi.remove();
		list = list.filter((elm) => {
			if (elm === value) {
				return false;
			} else {
				return true;
			}
		});
		saveList(list);
	};
	newLi.onclick = function () {
		newLi.classList.toggle('done');
	};
	newLi.append(deleteButton);
	todoList.append(newLi);
	list.push(value);
	saveList(list);
}

// localStorage.setItem('info', 'Youcef madadi');
function saveList(list) {
	const listText = JSON.stringify(list);
	localStorage.setItem('todo', listText);
}

function loadList() {
	const textList = localStorage.getItem('todo');
	if (textList) {
		return JSON.parse(textList);
	} else {
		return [];
	}
}
const tempList = loadList();

for (const element of tempList) {
	addTodo(element);
}
