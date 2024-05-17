document.addEventListener("DOMContentLoaded", backToTop);

function backToTop(){
    let elem = document.getElementById('back-top');
    elem.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo(0,0);
    });
} 