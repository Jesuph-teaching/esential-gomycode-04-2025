const numbers = document.querySelectorAll('[data-count]');
const maxDuration = 2000;
numbers.forEach((number) => {
	let x = 0;
	const max = Number(number.getAttribute('data-count'));
	if (!Number.isNaN(max)) {
		const id = setInterval(() => {
			if (x === max + 1) {
				clearInterval(id);
			} else {
				number.textContent = x;
				x++;
			}
		}, maxDuration / max);
	}
});
