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

var delay = 0;

document.querySelectorAll(".card").forEach(card => {
    card.classList.add("wow");
    card.classList.add("fadeInUp");
    delay += 2;
    card.setAttribute('data-wow-delay', delay / 10 + 's')
    if (delay == 6) delay = 0;
});

// https://daneden.github.io/animate.css/   - анимации
// https://wowjs.uk/   -  wow