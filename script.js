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

// 

allLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute("href");


        // add a bottom to top scroll

        if (href === "#") {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            })
        }


        if (href !== "#" && href.startsWith("#")) {
            const sectionDiv = document.querySelector(href)
            sectionDiv.scrollIntoView({ behavior: "smooth" })
        }

        if (link.classList.contains("main-nav-links")) {
            header.classList.toggle("open-nav");
        }

    });
});

const sectonHeroElement = document.querySelector(".section-hero")

const newObserver = new IntersectionObserver(

    //// A callback function to execute ////
    (entries) => {
        const entry = entries[0];
        if (!entry.isIntersecting) {
            header.classList.add("sticky")
        } else {
            header.classList.remove("sticky")
        }
    },

    /// An option that will detamine at which state or condition that the callback will invoke ///
    {
        root: null,
        threshold: 0,
        rootMargin: "-80px",
    })
/// calling the observer to observe the sectonHeroElement ///
newObserver.observe(sectonHeroElement)