/* Variables globales */
const navBar = document.querySelector(".main-nav-container");
const navToggle = document.querySelector(".main-nav-toggle");

/* Gestion de la page active */
function activeItem () {
    let pageUrl = window.location.href.substring(window.location.href);
    links = document.querySelectorAll('.main-nav a');
    links.forEach((link) => {
        link.parentNode.classList.remove("current");
        if(link.href == pageUrl ) {
            link.classList.add("current");
        }
    });
}

/* Toogle menu burger au click */
function burgerMenu () {
    let visibility = navBar.getAttribute('data-visible');
    if (visibility === "false") {
        navBar.setAttribute('data-visible', 'true');
        navBar.setAttribute('data-expanded', 'true');
        navToggle.setAttribute('aria-expanded', 'true');
    } else {
        navBar.setAttribute('data-visible', 'false');
        navBar.setAttribute('data-expanded', 'false');
        navToggle.setAttribute('aria-expanded', 'false');
    }
}

/* Event listener */
document.addEventListener("DOMContentLoaded", activeItem);
navToggle.addEventListener("click", burgerMenu);