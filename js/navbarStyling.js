function onMenuItemChanged(location) {
    let menu = document.querySelectorAll('body header nav a');

    for (let i = 0; i < menu.length; i++) {
        if (location === menu[i].href && !menu[i].classList.contains('logo')) {
            menu[i].classList.add('clickedItem');
        }
    }
}


document.addEventListener('DOMContentLoaded',
    () => onMenuItemChanged(document.location.href));