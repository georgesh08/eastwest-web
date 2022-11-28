function onMenuItemChanged(location, background, color) {
    let menu = document.querySelectorAll('body header nav a');

    for (let i = 0; i < menu.length; i++) {
        if (location === menu[i].href && !menu[i].classList.contains('logo')) {
            menu[i].style.background = background;
            menu[i].style.color = color;
        }
    }
}

document.addEventListener('DOMContentLoaded',
    () => onMenuItemChanged(document.location.href, '#C94843', '#FFFFFF'));