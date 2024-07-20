///// varriable

const header = document.querySelector(".header");
const menuBtb = document.getElementById("menu-btn");
const updateYear = document.getElementById("year");
const allLinks = document.querySelectorAll("a:link");

//// Update current year

let currentYear = new Date().getFullYear();
updateYear.textContent = currentYear;

///// Toggle menu bar

menuBtb.addEventListener('click', () => {
    header.classList.toggle("open-nav")
})

allLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute("href");


        // add a bottom to top scrol

        if (href === "#") {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            })
        } else if (href !== "#" && href.startsWith("#")) {
            const sectionDiv = document.querySelector(href)
            sectionDiv.scrollIntoView({ behavior: "smooth" })
        }

        if (link.classList.contains === "main-nav-links") {
            header.classList.toggle("open-nav")
        }

    })
})


