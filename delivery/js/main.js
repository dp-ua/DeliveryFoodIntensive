new WOW().init();

console.log("Main.js loaded");
const cardButton = document.querySelector("#card-button");
const close = document.querySelector(".button-close");
const modal = document.querySelector(".modal");


cardButton.addEventListener('click', toggleModal());

close.addEventListener('click', toggleModal());

function toggleModal() {
    modal.classList.toggle("is-open");
}

document.querySelectorAll(".card").forEach(card => {
    card.classList.add("wow");
    card.classList.add("fadeInUp");
});

// https://daneden.github.io/animate.css/   - анимации
// https://wowjs.uk/   -  wow