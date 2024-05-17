document.addEventListener("DOMContentLoaded", Menu);
window.addEventListener("resize", Menu);

function Menu () {
    /* gestion du menu burger */
    let smartphoneMedia = window.matchMedia("(min-width: 60rem)");
    let navContainer = document.getElementsByClassName("main-nav");
    let burger = document.getElementsByClassName("menuburger--content");
    
    if (!smartphoneMedia.matches){
        // inférieur à 60rem
        let content = navContainer[0].innerHTML;
        burger[0].innerHTML += content;
        navContainer[0].innerHTML = "";
        burger[0].classList.add("populated");
    } else if (smartphoneMedia.matches && !burger && burger[0].classList.contains("populated")) {
        // supérieur à 60rem et menu burger a du contenue ajouté  
        let content = burger[0].innerHTML;
        navContainer[0].innerHTML += content;
        burger[0].innerHTML = "";
        burger[0].classList.remove("populated");
    }

    /* gestion de la page active */
    let pageUrl = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
    links = document.querySelectorAll('.main-nav__item > a');
    links.forEach((link) => {
        link.parentNode.classList.remove("current");
        if(link.href.substring(link.href.lastIndexOf('/') + 1) == pageUrl) {
            link.parentNode.classList.add("current");
        }
    });
}