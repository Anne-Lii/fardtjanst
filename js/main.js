"use strict"

//hämta element från HTML-koden
let openButtonEl = document.getElementById("open-menu");
let closeButtonEl = document.getElementById("close-menu");

//event
openButtonEl.addEventListener("click", togglemenu);
closeButtonEl.addEventListener("click", togglemenu);

function togglemenu() {

    let navMenuEl = document.getElementById("nav-menu");
    

    let style = window.getComputedStyle(navMenuEl);
    

    if(style.display === "none") {
        navMenuEl.style.display = "block";
    } else {
        navMenuEl.style.display = "none";
    }
}



//hämta element från HTML-koden
let check_återkommandeEl = document.getElementById("check_återkommande");


//event
check_återkommandeEl.addEventListener("click", toggledays);


function toggledays() {

    let återkommande_dropmenyEl = document.getElementById("återkommande_dropmeny");
    console.log("det funkar");

    let styled = window.getComputedStyle(återkommande_dropmenyEl);
    console.log(styled.display);

    if(styled.display === "none") {
        återkommande_dropmenyEl.style.display = "block";
    } else {
        återkommande_dropmenyEl.style.display = "none";
    }
}