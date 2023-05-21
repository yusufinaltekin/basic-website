const next = document.querySelector(".nextSlide");
const prev = document.querySelector(".prevSlide");
const slide = document.querySelectorAll(".slide");
const auto = true;
const intervalTime = 3000;
let slideInterval;
const toTop = document.querySelector(".totop");

const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const menu = document.querySelector(".nav");
const menuList = document.querySelector(".list");
const navLinks = document.querySelectorAll(".nav>ul>li>a")



hamburger.addEventListener("click", (e) => {
    menu.classList.add("show");
    document.querySelector("body").style.overflowY = "hidden";
})

close.addEventListener("click", (e) => {
    menu.classList.remove("show");
    document.querySelector("body").style.overflowY = "auto";
})

window.addEventListener("scroll", () => {
    if (window.pageYOffset >= 100) {
        toTop.style.visibility = "visible";
    }
    else {
        toTop.style.visibility = "hidden";
    }
})


navLinks.forEach(element => {
    element.addEventListener("click", () => {
        menu.classList.remove("show");
        document.querySelector("body").style.overflowY = "scroll";
    })

});
const nextSlide = (e) => {
    const activeSlide = document.querySelector(".active");
    activeSlide.classList.remove("active");
    if (activeSlide.nextElementSibling && activeSlide.nextElementSibling != (next && prev)) {
        activeSlide.nextElementSibling.classList.add("active");
    }
    else {
        slide[0].classList.add("active")
    }
}
const prevSlide = () => {
    const activeSlide = document.querySelector(".active");
    activeSlide.classList.remove("active");

    if (activeSlide.previousElementSibling) {
        activeSlide.previousElementSibling.classList.add("active");
    }
    else {
        slide[slide.length - 1].classList.add("active")
    }
}
next.addEventListener("click", () => {
    nextSlide();
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime)
    }
})
prev.addEventListener("click", () => {
    prevSlide();
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime)
    }
})
if (auto) {
    slideInterval = setInterval(nextSlide, intervalTime)
}
