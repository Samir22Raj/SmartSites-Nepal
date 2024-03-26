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

hamburger.addEventListener("click", toggleMenu);

//Scripts for image carousel
