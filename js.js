const registerBook = document.querySelector(".register");
const btnPlus = document.querySelector(".btn_plus");
const input = document.querySelectorAll("input");
const body = document.querySelector("main");
const closeBtn = document.querySelector("#close");



function RegisterDisplay(closeBtn, btnPlus) {
    btnPlus.addEventListener("click", () => {
        registerBook.classList.toggle("hidden");
    })
    closeBtn.addEventListener("click", () => {
        registerBook.classList.toggle("hidden");

    })
}
RegisterDisplay(closeBtn, btnPlus);



let library = [];


//our ONE BOOK OBJECT wich we push in array myLibrary
function Book(title, author, bookPages, read, id) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.bookPages = bookPages;
    this.read = read;
}

Book.prototype.toggleRead = function () {
    this.read = !this.read
    console.log(library);
    console.log(this.read);
}


//this function push our books obj in array myLibrary
function adBookToLibrary(title, author, bookPages, read, id) {
    const book = new Book(title, author, bookPages, read, id);
    library.push(book);
    return book;
}


//this part help us create titile, author and etc 
registerBook.addEventListener("submit", (event) => {
    event.preventDefault();

    const bookData = new FormData(registerBook);

    const title = bookData.get("titleBook");
    const author = bookData.get("authorBook");
    const bookPages = bookData.get("numberBook");
    const read = bookData.get("readBook") !== null;
    const id = crypto.randomUUID();

    const book = adBookToLibrary(title, author, bookPages, read, id);
    console.log(library);
    clearBookRegiater();
    showBooksOnDisplay(body, book);
})


//this function clear bookRegister
function clearBookRegiater() {
    input.forEach(el => {
        el.value = "";
    })
    registerBook.classList.toggle("hidden");
}




// this function show our books on display
function showBooksOnDisplay(body, book) {

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

    card.id = book.id;
    cardTitle.textContent = book.title;
    cardAuthor.textContent = book.author;
    cardNumber.textContent = `${book.bookPages} pages`;


    // //cardbtns
    let btnDiv = document.createElement("div");
    btnDiv.classList.add("btnDiv");
    card.appendChild(btnDiv);


    //removeBtn
    let removeBtn = document.createElement("button");
    removeBtn.classList.add("remove", "cardBtn");
    removeBtn.textContent = "remove";

    btnDiv.appendChild(removeBtn);

    removeBtn.addEventListener("click", () => {
        for (let i = 0; i < library.length; i++) {
            if (card.id === library[i].id) {
                library.splice(i, 1);
                card.remove();
                console.log(library);
                break;
            }
        }
    })

    //readBtn
    let readBtn = document.createElement("button");
    readBtn.classList.add("cardBtn");
    readBtn.type = "button";


    function updateStatus(readBtn, book) {
        if (book.read) {
            readBtn.classList.add("greenBtn");
            readBtn.classList.remove("readBtn");
            readBtn.textContent = "read";
        } else {
            readBtn.textContent = "haven't read";
            readBtn.classList.add("readBtn");
            readBtn.classList.remove("greenBtn");
        }
    }

    updateStatus(readBtn, book);

    function changeStatus(readBtn, book) {
        readBtn.addEventListener("click", () => {
            book.toggleRead();
            updateStatus(readBtn, book)
        })
    }
    changeStatus(readBtn, book);
    btnDiv.appendChild(readBtn);


}


