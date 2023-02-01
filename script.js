/////////////////////////////////
// Define custom web compenents /
/////////////////////////////////

class DesktopHeader extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
    <img class="hamburger" id="mimi-menu-button" src="./media/pics/hamburger.png" alt="mimi's kitchen menu button">
    <a href="#"><img class="logo" src="./media/pics/mimis_kitchen_logo.png" alt="mimi's kitchen logo"></a>
    <div class="vertical-line"></div>
    <a href="./rick/rickhome.html"><img class="logo rick-logo" src="./media/pics/ricks_salsa_logo.png" alt="rick's salsa logo"></a>
    <img class="hamburger" id="rick-menu-button" src="./media/pics/hamburger.png" alt="rick's salsa menu button">
<nav id="mimi-nav" class="mimi-nav-hidden">
    <div>
        <img class="logo" src="./media/pics/mimis_kitchen_logo.png" alt="mimi's kitchen logo">
    </div>
    <ul id="mimi-menu">
        <li><a href="#">About</a></li>
        <li><a href="#">Seasonings</a></li>
        <li><a href="#">Spice Blends</a></li>
        <li><a href="#">Recipes</a></li>
    </ul>
</nav>
<nav id="rick-nav" class="rick-nav-hidden">
    <div>
        <img class="logo rick-logo" src="./media/pics/ricks_salsa_logo.png" alt="rick's salsa logo">
    </div>
    <ul id="rick-menu">
        <li><a href="#">About</a></li>
        <li><a href="#">Salsas</a></li>
        <li><a href="#">Seeds</a></li>
        <li><a href="#">Recipes</a></li>
    </ul>
</nav>
        `
    }
}

customElements.define('desktop-header', DesktopHeader);


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


// Intersection observer for home page 

// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add('show');
//         } else {
//             entry.target.classList.remove('show');
//         }
//     });
// });

// const hiddenElements = document.querySelectorAll('.hidden');
// hiddenElements.forEach((el) => observer.observe(el));

