// Scripts for hamburger menu
const menu = document.querySelector(".nav-menu__links");
const menuItems = document.querySelectorAll(".nav-menu__item");
const hamburger = document.querySelector(".nav-menu__hamburger");
const closeIcon = document.querySelector(".nav-menu__cross");
const menuIcon = document.querySelector(".nav-menu__menuIcon");

function toggleMenu() {
	if (menu.classList.contains("showMenu")) {
		menu.classList.remove("showMenu");
		closeIcon.classList.add("hidden");
		menuIcon.classList.remove("hidden");
	} else {
		menu.classList.add("showMenu");
		closeIcon.classList.remove("hidden");
		menuIcon.classList.add("hidden");
	}
}

//hamburger.addEventListener("click", toggleMenu);

//Scripts for image carousel
let slideIndex = 1;
showSlide(slideIndex);

// change slide with the dots
function currentSlide(n) {
	showSlide((slideIndex = n));
}

function showSlide(n) {
	let i;
	const slides = document.getElementsByClassName("slide");
	const dots = document.getElementsByClassName("dot");
	const reviews = document.getElementsByClassName("review");
	/*if (dots.length == 6) {
		slides == reviews;
	}
	console.log(n);
	console.log(dots.length);
	console.log(slides);*/
	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	//console.log(slideIndex);
	// hide all slides
	for (i = 0; i < slides.length; i++) {
		slides[i].classList.add("hidden");
		slides[i].classList.remove("flex");
	}

	/*console.log(slides);
	console.log(dots);*/

	// remove active status from all dots
	for (i = 0; i < dots.length; i++) {
		dots[i].classList.remove("bg-yellow");
		dots[i].classList.remove("w-2");
		dots[i].classList.add("bg-off-white");
		dots[i].classList.add("w-5");
	}

	// show the active slide
	slides[slideIndex - 1].classList.remove("hidden");
	slides[slideIndex - 1].classList.add("flex");

	// highlight the active dot
	dots[slideIndex - 1].classList.remove("bg-off-white");
	dots[slideIndex - 1].classList.add("bg-yellow");
	dots[slideIndex - 1].classList.remove("w-5");
	dots[slideIndex - 1].classList.add("w-2");

	/* Change every 2 seconds
	setTimeout(showSlide, 2000);*/
}
