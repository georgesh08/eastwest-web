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
        const newObject = {"name": userName, "testimonial": testimonial, "post-time": Date.now()};
        localStorage.setItem(id, JSON.stringify(newObject));
        addComment(newObject);
        clearFields();
    })
}

function showComment() {
    const keys = Object.keys(localStorage);
    let n = keys.length;
    let arr = []
    while (n--) {
        arr.push(JSON.parse(localStorage.getItem(keys[keys.length - n - 1])));
    }
    arr.sort(comparator)
    arr.forEach(addComment)
}

function comparator(item1, item2) {
    return item1["post-time"] - item2["post-time"];
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

function clearFields(){
    let field = document.querySelectorAll("label textarea")
    field.forEach(elem => {
        elem.value = '';
    })
}

(function () {
    document.addEventListener("DOMContentLoaded", () => {
        listenOnSubmitCLick()
        showComment()
    })
})();