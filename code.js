"use strict"

const btaMenu = document.querySelector(".container__hamburger-svg");
const nav = document.querySelector(".header__nav");

btaMenu.addEventListener("click", () => {
    // if( nav.classList.contains("nav-active")) {
    //     nav.classList.remove("nav-active")
    // }
    // else {
    //     nav.classList.add("nav-active")
    // }
    nav.classList.toggle("active-nav")
})