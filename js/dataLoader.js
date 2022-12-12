function listenOnLoadCLick() {
    let button = document.getElementById('loadButton');
    button.addEventListener('click', _ => getData());
}

async function getData(){
    removeReviews();
    let postNumber = getRandomPost();
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postNumber}/comments`);
    let result = JSON.parse(await response.json());
    for (let i = 0; i < result.left; i++){
        let title = result[i].title;
        let body = result[i].body;
        console.log(title);
        addPost(title, body);
    }
}

function removeReviews(){
    let container = document.getElementById('posts');
    container.innerHTML = '';
}

function getRandomPost(){
    return Math.floor(Math.random() * (100) + 1);
}

function addPost(title, body){
    let container = document.querySelector(".posts-container");
    let template = document.querySelector('#post-template');
    let clone = template.content.cloneNode(true);
    let sp = clone.querySelectorAll("span");
    sp[0].textContent = title;
    sp[1].textContent = body;
    container.appendChild(clone);
}

(function () {
    document.addEventListener("DOMContentLoaded", () => {
        listenOnLoadCLick()
    })
})();