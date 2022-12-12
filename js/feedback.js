function listenOnSubmitCLick() {
    document.addEventListener("submit", (event) => {
        event.preventDefault()
        const userName = document.getElementById("name").value;
        const testimonial = document.getElementById("testimonial").value;

        if (!userName) {
            alert("Некорректное имя!");
            return;
        }

        if (/[0-9]/.test(userName)) {
            alert("В имени могут присутствовать только буквы!");
            return;
        }
        const id = userName + Math.random() + Date.now()
        const newObject = {"name": userName, "testimonial": testimonial};
        localStorage.setItem(id, JSON.stringify(newObject));
        addComment(newObject);
    })
}

function showComment() {
    const keys = Object.keys(localStorage);
    let n = keys.length;
    let arr = []
    while (n--) {
        arr.push(JSON.parse(localStorage.getItem(keys[keys.length - n - 1])));
    }
    arr.forEach(addComment)
}

function addComment(newComment){
    let container = document.querySelector(".testimonials-container");
    let template = document.querySelector('#testimonial-template');
    let clone = template.content.cloneNode(true);
    let sp = clone.querySelectorAll("span");
    sp[0].textContent = newComment["name"];
    sp[1].textContent = newComment["testimonial"];
    container.appendChild(clone);
}

(function () {
    document.addEventListener("DOMContentLoaded", () => {
        listenOnSubmitCLick()
        showComment()
    })
})();