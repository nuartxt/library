
let mainBody = document.querySelector("main");
let btn_plus = document.querySelector(".btn_plus");
let confirm = document.querySelector("#confirm");
let registerBook = document.querySelector(".register");
let form = document.querySelector("form");


btn_plus.addEventListener("click", () => {
    registerBook.classList.toggle("hidden");
});

const myLibrary = [];




function Book(title, author, number, read) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.number = number;
    this.read = read;

}

function addBookToLibrary(title, author, number, read) {
    const book = new Book(title, author, number, read);
    myLibrary.push(book);
}

form.addEventListener("submit", (event) => {
    event.preventDefault();


    const formData = new FormData(form);

    const title = formData.get("titleBook");
    const author = formData.get("authorBook");
    const number = formData.get("numberBook");
    const read = formData.get("readBook");

    addBookToLibrary(title, author, number, read);
    console.log(myLibrary);

})





















// btn_plus.addEventListener("click", () => {
//     console.log(title)
// })





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