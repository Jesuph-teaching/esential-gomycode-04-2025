const yesButton = document.querySelector('#yes');
const noButton = document.querySelector('#no');
const alertNotification = document.querySelector('#alert');

yesButton.onclick = function () {
	alertNotification.classList.add('open');
};
noButton.onmouseenter = function () {
	noButton.style.position = 'fixed';
	const x =
		Math.floor(Math.random() * window.innerWidth) - noButton.clientWidth;
	const y =
		Math.floor(Math.random() * window.innerHeight) - noButton.clientHeight;
	noButton.style.top = y + 'px';
	noButton.style.left = x + 'px';
};
