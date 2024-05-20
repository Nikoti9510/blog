document.addEventListener("DOMContentLoaded", Menu);

function Menu () {
    /* gestion de la page active */
    let pageUrl = window.location.href.substring(window.location.href); /* .lastIndexOf('/') + 1 */
    links = document.querySelectorAll('.header > nav > a');
    links.forEach((link) => {
        link.parentNode.classList.remove("current");
        if(link.href == pageUrl ) {
            link.classList.add("current");
        }
    });
}