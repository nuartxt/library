
console.log("HEllo world!")

let btn = document.querySelector("button");
let mainBody = document.querySelector("main");

btn.addEventListener("click", () => {
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
})
