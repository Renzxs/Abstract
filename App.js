const menuBtn = document.getElementById("menu");
const mobileMenu = document.getElementById("mobile-menu");

let isMenuOpen = false;

menuBtn.addEventListener("click", () => {
    isMenuOpen = !isMenuOpen;

    if(isMenuOpen) {
        menuBtn.classList.add("menu-clicked");
        mobileMenu.style.height = mobileMenu.scrollHeight + "px";
        mobileMenu.style.marginTop = "30px";
    }
    else {
        menuBtn.classList.remove("menu-clicked");
        mobileMenu.style.height = "0";
        mobileMenu.style.marginTop = "0px";
    }
})

const sec1Observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add("show");
        }
        else {
            entry.target.classList.remove("show");
        }
    })
});

const sec1 = document.querySelectorAll(".sec-1");

sec1.forEach((el) => {sec1Observer.observe(el)});