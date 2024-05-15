document.addEventListener("DOMContentLoaded", postNav);

/*---- Génération automatique de navigation ----*/
function postNav(){
    /* Initialisation */
    let navContainer = document.querySelector(".main-nav ul"),
        allHn = document.querySelectorAll(".post-full :is(h1, h2, h3, h4, h5, h6)"),
        allHnArray = [...allHn],
        uniqueId = 0,
        ticking = false,
        current = 0;

    /* Boucle sur tout les Hn du post */
   	if(navContainer && allHn){
        allHnArray.forEach((Hn, index) => {
            // Creation du <a>
            let a = document.createElement("a"),
                hType = Hn.tagName,
                link = "#"+uniqueId;
            Hn.setAttribute("id", uniqueId);
            uniqueId++;
            a.textContent = Hn.textContent;
            a.classList.add("main-nav__link");
            a.classList.add("main-nav__link--"+hType);
            a.setAttribute('href',link);

            // Creation du <li> contenant le lien
            let li = document.createElement("li");
            li.classList.add("main-nav__item");

            // Ajout des deux éléments dans la nav
            li.appendChild(a)
            navContainer.appendChild(li);

            // Si premier element, ajoute classe active
            if(index == current){
                a.classList.add("active");
            }
        });
    }

    /* Scroll vers l'élement de la nav cliqué par l'internaute */
    navContainer.addEventListener("click", (e) => {
        // Recuperation de l'url de l'élément ciblé pour actualiser current 
        let url = e.target.href.substring(e.target.href.lastIndexOf('#') + 1);
        current = url;
        navElement.forEach((elem, index) => { 
            // actualisation de la classe active
            elem.classList.remove("active");
            if(index == current){
                elem.classList.add("active");
            }
        });
    });

    /* Ajoute la class "active" dans le dernier titre entrée à l'écran au scroll */
    let navElement = document.querySelectorAll(".main-nav__link");
    document.addEventListener("scroll", () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                allHn.forEach(function(Hn, index){
                    // Actualisation de current si element dans l'écran
                    if(isInViewport(Hn)){ 
                        current = index; 
                    }
                    // Actualisation de la classe active en fonction de current
                    if(current == index){
                        navElement[index].classList.add("active");
                    } else {
                        navElement[index].classList.remove("active");
                    }

                    // A noter, deux cas non traités : 
                    // - quand deux éléments titres se trouvent dans le même écran, alors les deux ont la classe active.
                    // - au scroll up, c'est toujours l'ancien titre qui a la classe active, jusqu'a ce que le précédent titre rentre dans l'écran.
                    // Pour palier à ces deux points, il faut revoir la structure des posts, pour que chaque titre soient dans une section l'englobant.
                    // Il serait également possible d'ajouter une zonne de "buffer" en haut et bas de l'écran pour mitiger un peu la superposition d'état (en jouant sur la fonction isInViewport).

                });
                ticking = false;
            });
            ticking = true;
        }
    });
}

/* Fonction de detection de la présence d'un élément dans l'écean */
function isInViewport(elem){
    const rect = elem.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}