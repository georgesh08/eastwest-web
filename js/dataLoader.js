function listenOnLoadCLick() {
    let button = document.getElementById('loadButton');
    button.addEventListener('click', _ => getData());
}

async function getData(){
    removeReviews();
    let postNumber = getRandomPost();
    let preLoader = document.getElementById('preloader');
    preLoader.innerHTML = '<div class="preloader"></div>';
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postNumber}/comments`);
    let result = await response.json();
    preLoader.innerHTML = '';
    result.forEach(elem => {
        const newPost = {"name": elem.name, "body": elem.body};
        addPost(newPost);
    })
}

function removeReviews(){
    // document.getElementById('posts-container').innerHTML = '';
}

function getRandomPost(){
    return Math.floor(Math.random() * (100) + 1);
}

function addPost(newPost){
    let container = document.querySelector(".posts-container");
    let template = document.querySelector('#post-template');
    let clone = template.content.cloneNode(true);
    let sp = clone.querySelectorAll("span");
    sp[0].textContent = newPost["name"];
    sp[1].textContent = newPost["body"];
    container.appendChild(clone);
}

(function () {
    document.addEventListener("DOMContentLoaded", () => {
        listenOnLoadCLick()
    })
})();