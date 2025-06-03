/* selecting elements */
const color = document.querySelector('#color-title');
const result = document.querySelector('#result');
const Play = document.querySelector('#Play');
const boxes = document.querySelectorAll('.box');
const jsConfetti = new JSConfetti();
let colors = ['', '', '', '', '', ''];
let colorChoice = 0;
let attempts;
/* utilities functions */
function generateNumber(start = 0, end = 255) {
	const d = Math.abs(end - start);
	const min = Math.min(start, end);
	const r = Math.random(); // between 0 and 1
	const newNumber = Math.round(r * d) + min;
	return newNumber;
}

function generateColor() {
	return `rgb(${generateNumber()},${generateNumber()},${generateNumber()})`;
}

/* --------------Game logic-------------- */
function stopBoxes() {
	boxes.forEach((elm, i) => {
		elm.onclick = null;
	});
}
function startGame() {
	attempts = 3;
	Play.textContent = 'Restart';
	/* generate 6 colors */
	colors = colors.map(generateColor);
	/* colors = colors.map(() => {
		return generateColor();
	}); */
	/* picking random color */
	colorChoice = generateNumber(0, 5);
	/* Display random color to pick */
	color.textContent = colors[colorChoice];
	/* Display text */
	result.textContent = 'Please select the corresponding color.';
	/* display 6 colors */
	boxes.forEach((elm, i) => {
		elm.style.backgroundColor = colors[i];
		elm.onclick = function (event) {
			attempts--;
			if (i === colorChoice) {
				result.textContent = 'Correct, you have found the color';
				stopBoxes();
				jsConfetti.addConfetti();
			} else {
				if (attempts === 0) {
					result.textContent = 'Game over';
					stopBoxes();
				} else {
					result.textContent = `Try again, you have ${attempts} attempts left`;
				}
			}
		};
	});
}
/* control buttons */
Play.onclick = startGame;
