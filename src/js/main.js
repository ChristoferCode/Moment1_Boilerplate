"use strict";

let openMenuEl = document.getElementById("open-menu");
let closeMenuEl = document.getElementById("close-menu");
let menuEl = document.getElementById("menu");

let menutextopenEl = document.querySelector(".menutextopen");
let bar1El = document.querySelector(".bar1");
let bar2El = document.querySelector(".bar2");
let bar3El = document.querySelector(".bar3");


let menutextcloseEl = document.querySelector(".menutextclose");
let bar1closeEl = document.querySelector(".bar1close");
let bar2closeEl = document.querySelector(".bar2close");
let bar3closeEl = document.querySelector(".bar3close");



openMenuEl.addEventListener("click", openMenu);
closeMenuEl.addEventListener("click", closeMenu);



function openMenu() {

    if (window.getComputedStyle(menuEl).display === "none" && window.matchMedia("(max-width: 800px)").matches) {
        menuEl.style.display = "flex";
        openMenuEl.style.animationPlayState = "running";
        bar1El.style.animationPlayState = "running";
        bar2El.style.animationPlayState = "running";
        bar3El.style.animationPlayState = "running";
        menutextopenEl.style.animationPlayState = "running";
        menutextopenEl.innerHTML = "Stäng";

    } else if (window.getComputedStyle(menuEl).display === "flex" && window.matchMedia("(max-width: 800px)").matches) {
        closeMenuEl.style.display = "flex";
        openMenuEl.style.display = "none";
    }
}


function closeMenu() {

    if (window.getComputedStyle(menuEl).display === "flex" && window.matchMedia("(max-width: 800px)").matches) {
        menuEl.style.display = "none";
        closeMenuEl.style.animationPlayState = "running";
        bar1closeEl.style.animationPlayState = "running";
        bar2closeEl.style.animationPlayState = "running";
        bar3closeEl.style.animationPlayState = "running";
        menutextcloseEl.style.animationPlayState = "running";
        menutextcloseEl.innerHTML = "Meny";

    } else if (window.getComputedStyle(menuEl).display === "none" && window.matchMedia("(max-width: 800px)").matches) {
        closeMenuEl.style.display = "none";
        openMenuEl.style.display = "flex";
    }
}

// function resetMenu() {
//     openMenuEl.style.animationPlayState = "paused";
//     bar1El.style.animationPlayState = "paused";
//     bar2El.style.animationPlayState = "paused";
//     bar3El.style.animationPlayState = "paused";
//     menutextopenEl.style.animationPlayState = "paused";

//     openMenuEl.style.animationDirection = "reverse";
//     bar1El.style.animationDirection = "reverse";
//     bar2El.style.animationDirection = "reverse";
//     bar3El.style.animationDirection = "reverse";
//     menutextopenEl.style.animationDirection = "reverse";


// }


// function closeMenu() {

//     if  (style.display === "flex" && window.matchMedia("(max-width: 800px)").matches) {
//         menuEl.style.display = "none";
//         openMenuEl.style.animationPlayState = "running";
//         bar1El.style.animationPlayState = "running";
//         bar2El.style.animationPlayState = "running";
//         bar3El.style.animationPlayState = "running";
//         menutextopenEl.style.animationPlayState = "running";
//         menutextopenEl.innerHTML = "Meny";
//     }

//     setTimeout(resetMenuBack, 1000);
// }




// function resetMenu() {
//     openMenuEl.style.animationPlayState = "paused";
//     bar1El.style.animationPlayState = "paused";
//     bar2El.style.animationPlayState = "paused";
//     bar3El.style.animationPlayState = "paused";
//     menutextopenEl.style.animationPlayState = "paused";

//     openMenuEl.style.animationDirection = "normal";
//     bar1El.style.animationDirection = "normal";
//     bar2El.style.animationDirection = "normal";
//     bar3El.style.animationDirection = "normal";
//     menutextopenEl.style.animationDirection = "normal";

//     openMenuEl.addEventListener("click", openMenu);
// }





// function toggleButton() {
//     let styleOpen = window.getComputedStyle(openMenuEl);
//     let styleClose = window.getComputedStyle(closeMenuEl);


//     if (styleOpen.display === "flex") {
//         openMenuEl.styleOpen.display = "none";
//         closeMenuEl.styleClose.display = "flex";
//     } else {
//         openMenuEl.styleOpen.display = "flex";
//         closeMenuEl.styleClose.display = "none";
//     }
// }




// if (styleOpen.display === "flex" && window.matchMedia("(min-width: 800px)").matches) {
//     menuEl.style.display = "flex";
// } 


// if (styleClose.display === "none") {
//     closeMenuEl.styleClose.display = "flex";
// } else {
//     closeMenuEl.styleClose.display = "none";
// }