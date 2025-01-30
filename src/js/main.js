"use strict";

let openMenuEl = document.getElementById("open-menu");
let closeMenuEl = document.getElementById("close-menu");
let menuEl = document.getElementById("menu");


openMenuEl.addEventListener("click", toggleMenu);
closeMenuEl.addEventListener("click", toggleMenu);


function toggleMenu() {
    let style = window.getComputedStyle(menuEl);
    let styleOpen = window.getComputedStyle(openMenuEl);
    let styleClose = window.getComputedStyle(closeMenuEl);

    console.log(style.display);
    console.log(styleOpen.display);
    console.log(styleClose.display);


    if (style.display === "none" && window.matchMedia("(max-width: 800px)").matches) {
        menuEl.style.display = "flex";
    
    } else {
        menuEl.style.display = "none";
    }



    if (styleOpen.display === "flex" && window.matchMedia("(min-width: 800px)").matches) {
        menuEl.style.display = "flex";
    } 


    if (styleClose.display === "none") {
        closeMenuEl.styleClose.display = "flex";
    } else {
        closeMenuEl.styleClose.display = "none";
    }
}

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
