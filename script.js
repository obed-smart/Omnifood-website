///// varriable

const header = document.querySelector(".header");
const menuBtb = document.getElementById("menu-btn");
const updateYear = document.getElementById("year");

//// Update current year

let currentYear = new Date().getFullYear();
updateYear.textContent = currentYear;

///// Toggle menu bar

menuBtb.addEventListener('click', ()=>{
    header.classList.toggle("open-nav")
})