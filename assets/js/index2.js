function toggleMenu(){
    const icon = document.querySelector(".hamburger-icon");
    const menu = document.querySelector(".div-hamburgerMenu-link");
    icon.classList.toggle("open");
    menu.classList.toggle("open");
}