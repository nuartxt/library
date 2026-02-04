const registerBook = document.querySelector(".register");
const btnPlus = document.querySelector(".btn_plus");
const input = document.querySelectorAll("input");
const body = document.querySelector("main");

btnPlus.addEventListener("click", () => {
    registerBook.classList.toggle("hidden");
})


const library = [];


//our ONE BOOK OBJECT wich we push in array myLibrary
function Book(title, author, bookPages, read, id) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.bookPages = bookPages;
    this.read = read;
}


//this function push our books obj in array myLibrary
function adBookToLibrary(title, author, bookPages, read, id) {
    const book = new Book(title, author, bookPages, read, id);
    library.push(book);
    // return book;
}


//this part help us create titile, author and etc 
registerBook.addEventListener("submit", (event) => {
    event.preventDefault();

    const bookData = new FormData(registerBook);

    const title = bookData.get("titleBook");
    const author = bookData.get("authorBook");
    const bookPages = bookData.get("numberBook");
    const read = bookData.get("readBook");
    const id = crypto.randomUUID();

    // for (const el of input) {
    //     if (!el.value == "") {
    //         adBookToLibrary(title, author, bookPages, read, id);
    //         console.log(library);
    //         clearBookRegiater();
    //         showBooksOnDisplay(body, title, author, bookPages, read, id);
    //     } else {
    //         alert("fuck you");
    //         break;
    //     }
    // }

    adBookToLibrary(title, author, bookPages, read, id);
    console.log(library);
    clearBookRegiater();
    showBooksOnDisplay(body, title, author, bookPages, read, id);
})


//this function clear bookRegister
function clearBookRegiater() {
    input.forEach(el => {
        el.value = "";
    })
    registerBook.classList.toggle("hidden");
}



// this function show our books on display
function showBooksOnDisplay(body, title, author, bookPages, read, id) {

    //Card info
    let card = document.createElement("div");
    card.classList.add("card");
    body.appendChild(card);


    const cardTitle = document.createElement("h2");
    const cardAuthor = document.createElement("p");
    const cardNumber = document.createElement("p");
    card.appendChild(cardTitle);
    card.appendChild(cardAuthor);
    card.appendChild(cardNumber);

    card.id = id;
    cardTitle.textContent = title;
    cardAuthor.textContent = author;
    cardNumber.textContent = `${bookPages} pages`;


    // //cardbtns
    let btnDiv = document.createElement("div");
    btnDiv.classList.add("btnDiv");
    card.appendChild(btnDiv);

    let removeBtn = document.createElement("button");
    removeBtn.classList.add("remove", "cardBtn");
    removeBtn.textContent = "remove";
    btnDiv.appendChild(removeBtn);

    let readBtn = document.createElement("button");
    readBtn.classList.add("read", "cardBtn");
    readBtn.textContent = "read";
    btnDiv.appendChild(readBtn);

}