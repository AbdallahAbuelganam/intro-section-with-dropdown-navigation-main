menu = document.querySelector("header .menu");
closeMenu = document.querySelector("header .close-menu");
layer = document.querySelector(".layer");

console.log(menu);
console.log(closeMenu);

closeMenu.addEventListener('click', () => {
    closeMenu.parentElement.classList.add("close");
    setTimeout(() => {
        layer.classList.remove("background-on");
        layer.classList.add("background-off");
    }, 900);
});

menu.addEventListener('click', () => {
    closeMenu.parentElement.classList.remove("close");
    layer.classList.add("background-on");
    layer.classList.remove("background-off");
});