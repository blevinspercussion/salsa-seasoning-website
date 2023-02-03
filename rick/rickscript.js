// Get DOM elements

const body = document.querySelector('body');
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('nav');

hamburger.addEventListener('click', () => {
    if (navMenu.classList.contains('hidden-element')) {
        navMenu.classList.remove('hidden-element');
        hamburger.src = "../media/pics/exit.svg"
    } else {
        navMenu.classList.add('hidden-element');
        hamburger.src = "../media/pics/hamburger.png";
    }
})

