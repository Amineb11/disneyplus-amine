'use strict';

// Annimation du +
const icons = document.querySelectorAll('.plus');
const accordionText = document.querySelectorAll('.text');
const title = document.querySelectorAll('.title'); 
for (let i = 0; i < icons.length; i++) {
	title[i].addEventListener('click', () => {
		icons[i].classList.toggle('active');
		accordionText[i].classList.toggle('active');
		if (!icons[i]) {
			icons[i].classList.remove('active');
		}
	});
}

//afficher le bouton connexion quand on deflie la page
const inscrire = document.querySelector(".inscrire");

window.addEventListener("scroll", () => {
	if (window.scrollY> 500)  {
		inscrire.classList.remove("inscrire");
	} else {
		inscrire.classList.add("inscrire");
	}
});

//afficher le logo quand on deflie la page
window.addEventListener("scroll", function() {
	var header = this.document.querySelector("header");
	header.classList.toggle("scrolled", window.scrollY > 500)
});

// Passer de la page  Anglais à Français 

const langSelect = document.getElementById("lang-select");
langSelect.addEventListener("change", () => {
    const selectedValue = langSelect.value;
    if (selectedValue !== '') {
        window.location.href = selectedValue;
    }
})