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