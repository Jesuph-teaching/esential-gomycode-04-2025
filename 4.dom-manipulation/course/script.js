const counter = document.getElementById('counter');
console.log(counter);

counter.onclick = function () {
	counter.textContent++;
};
let intervalId;
counter.onmousedown = function () {
	intervalId = setInterval(() => {
		counter.textContent++;
	}, 1);
};
counter.onmouseup = function () {
	if (intervalId) {
		clearInterval(intervalId);
		intervalId = null;
	}
};

counter.oncontextmenu = function (event) {
	event.preventDefault();
	console.log('someone entered the context');
};
