const mainBody = document.querySelector("main");
const btn_plus = document.querySelector(".btn_plus");
const confirm = document.querySelector("#confirm");
const registerBook = document.querySelector(".register");
const form = document.querySelector("form");

btn_plus.addEventListener("click", () => {
    registerBook.classList.toggle("hidden");
});

const myLibrary = [];


//our ONE BOOK OBJECT wich we push in array myLibrary
function Book(title, author, number, read) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.number = number;
    this.read = read;
}

//this function push our book obj in array myLibrary
function addBookToLibrary(title, author, number, read) {
    const book = new Book(title, author, number, read);
    myLibrary.push(book);
}


//this part help us create titile, author and etc 
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    const title = formData.get("titleBook");
    const author = formData.get("authorBook");
    const number = formData.get("numberBook");
    const read = formData.get("readBook");

    addBookToLibrary(title, author, number, read);
    console.log(myLibrary);
    clearForm(input);
})


const input = document.querySelectorAll("input");
function clearForm(arr) {
    arr.forEach(el => {
        el.value = "";
    })
    form.classList.toggle("hidden");
}


























/* 
    //Card div
    let card = document.createElement("div");
    card.classList.add("card");
    mainBody.appendChild(card);

    // //cardbtns
    let remove = document.createElement("button");
    remove.classList.add("remove", "cardBtn");
    remove.textContent = "remove";
    card.appendChild(remove);

    let read = document.createElement("button");
    read.classList.add("read", "cardBtn");
    read.textContent = "read";
    card.appendChild(read);
*/