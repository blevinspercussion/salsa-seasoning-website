// Get DOM Elements
const body = document.querySelector('body');
const header = document.querySelector('header');
const mimiHamburger = document.getElementById('mimi-menu-button');
const rickHamburger = document.getElementById('rick-menu-button');
const mimiNav = document.getElementById('mimi-nav');
const rickNav = document.getElementById('rick-nav');

const overlay = document.getElementById('overlay');
const contactPopup = document.getElementById('contact-popup');
const popupExitButton = document.getElementById('popup-exit-button');
const submitButton = document.getElementById('submit');

mimiHamburger.addEventListener('click', () => {
    if (rickNav.classList.contains('rick-nav-shown')) {
        rickNav.classList.remove('rick-nav-shown');
        rickNav.classList.add('rick-nav-hidden');
        rickHamburger.src = './media/pics/hamburger.png'
    }
    if (mimiNav.classList.contains('mimi-nav-shown')) {
        mimiNav.classList.remove('mimi-nav-shown');
        mimiNav.classList.add('mimi-nav-hidden');
        mimiHamburger.src = './media/pics/hamburger.png';
    } else {
        mimiNav.classList.remove('mimi-nav-hidden');
        mimiNav.classList.add('mimi-nav-shown');
        mimiHamburger.src = './media/pics/exit.svg';
    }
})

rickHamburger.addEventListener('click', () => {
    if (mimiNav.classList.contains('mimi-nav-shown')) {
        mimiNav.classList.remove('mimi-nav-shown');
        mimiNav.classList.add('mimi-nav-hidden');
        mimiHamburger.src = './media/pics/hamburger.png';
    }
    if (rickNav.classList.contains('rick-nav-shown')) {
        rickNav.classList.remove('rick-nav-shown');
        rickNav.classList.add('rick-nav-hidden');
        rickHamburger.src = './media/pics/hamburger.png';
    } else {
        rickNav.classList.remove('rick-nav-hidden');
        rickNav.classList.add('rick-nav-shown');
        rickHamburger.src = './media/pics/exit.svg';
    }
})

const hidePopup = () => {
    console.log('clicked');
    overlay.classList.remove('overlay-visible');
    overlay.classList.add('overlay-hidden');
    contactPopup.classList.remove('contact-popup-visible');
    contactPopup.classList.add('contact-popup-hidden');
}


body.onload = () => {
    document.getElementById('hero-text').classList.add('faded-in');
    document.getElementById('hero-text').classList.remove('faded-out');
    setTimeout(() => {
        overlay.classList.remove('overlay-hidden');
        overlay.classList.add('overlay-visible');
        contactPopup.classList.remove('contact-popup-hidden');
        contactPopup.classList.add('contact-popup-visible');
    }, 5000)
}


popupExitButton.addEventListener('click', () => {
    hidePopup();
});
submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    hidePopup();
});