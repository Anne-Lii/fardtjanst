"use strict"

//hämta element från HTML-koden
let openButtonEl = document.getElementById("open-menu");
let closeButtonEl = document.getElementById("close-menu");

//event
openButtonEl.addEventListener("click", togglemenu);
closeButtonEl.addEventListener("click", togglemenu);

function togglemenu() {

    let navMenuEl = document.getElementById("nav-menu");
    //console.log("det funkar");

    let style = window.getComputedStyle(navMenuEl);
    console.log(style.display);

    if(style.display === "none") {
        navMenuEl.style.display = "block";
    } else {
        navMenuEl.style.display = "none";
    }
}