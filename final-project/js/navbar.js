const navigation = document.querySelector('header .navbar .navigation');
const closeNavigation = document.querySelector(
	'header .navbar .navigation .close'
);
const menuHamburger = document.querySelector('header .navbar .hamburger');

closeNavigation.onclick = function () {
	navigation.classList.remove('open');
};
menuHamburger.onclick = function () {
	navigation.classList.add('open');
};
