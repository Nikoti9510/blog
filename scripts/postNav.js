/*---- Génération automatique de navigation ----*/
document.addEventListener("DOMContentLoaded", postNav);

function postNav(){
    /* Récupération de tout les Hn du post */
    let navContainer = document.querySelector(".main-nav ul"),
        allHn = document.querySelectorAll(".post-full :is(h1, h2, h3, h4, h5, h6)"),
        allHnArray = [...allHn],
        uniqueId = 0;

   	if(navContainer && allHn){
        /* Boucle sur tout les Hn du post */
        allHnArray.forEach(Hn => {
            /* Creation du <a> */
            let a = document.createElement("a"),
                hType = Hn.tagName,
                link = "#"+uniqueId;
            Hn.setAttribute("id", uniqueId);
            uniqueId++;
            a.textContent = Hn.textContent;
            a.classList.add("main-nav__link");
            a.classList.add("main-nav__link--"+hType);
            a.setAttribute('href',link);

            /* Creation du <li> contenant le lien */
            let li = document.createElement("li");
            li.classList.add("main-nav__item");

            /* Ajout des deux éléments dans la nav */
            li.appendChild(a)
            navContainer.appendChild(li);
        });
   	}

    /* Scroll sur l'élement de la nav au click */
    let navElement = document.querySelectorAll(".main-nav__link");
    navContainer.addEventListener("click", (e) => {
        navElement.forEach(elem => { elem.classList.remove("active"); });
        e.target.classList.add("active");
    });

    /* Ajoute la class "active" aux éléments quand ils sont dans l'écran */
    let ticking = false;

    function isInViewport(elem) {
        const rect = elem.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    document.addEventListener("scroll", () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                allHn.forEach(function(Hn, index) {

                    /* comment trouver le Hn et lui laisser la classe tant que le prochain Hn n'est pas apparut ? */  

                    if(isInViewport(Hn)) {
                        navElement[index].classList.add("active");
                    } else {
                        navElement[index].classList.remove("active");
                    }
                });
                ticking = false;
            });
            ticking = true;
        }
    });
}








