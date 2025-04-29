var temperature = 20;
console.log(message);
var message =
	temperature > 20
		? 'Rahi skhana lyouma'
		: temperature > 10
		? 'rahi cavaaaaa'
		: 'rahi barda l7ala';

let color = prompt('write your fav color');

switch (color) {
	case 'blue': {
		console.log('You love the sky');
		break;
	}
	case 'red': {
		console.log('You love tomatoes');
		break;
	}
	case 'yellow': {
		console.log('you love cheese and bananas');
		break;
	}
	case 'magenta': {
		console.log('you like masha');
		break;
	}
	default: {
		console.log('badl the color');
		break;
	}
}
