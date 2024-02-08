let addBook = document.querySelector(".addBook")
let submitButton = document.querySelector(".submitbtn")
let form = document.querySelector(".form")
let resultDivs = document.querySelector(".resultDiv")
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.Book = function () {
        console.log(`${title}, ${author}, ${pages}`)
    }
}

addBook.addEventListener("click", () => {
    form.style.visibility = "visible";
})

let array = []
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let bookAdd = new Book(form.title.value, form.author.value, form.pages.value)
    array.push(bookAdd);
    form.style.visibility = "hidden";

    form.title.value = "";
    form.author.value = "";
    form.pages.value = "";

    displayDiv(array.length - 1)
})


function displayDiv(index) {
    console.log(index)
    let card = document.createElement("div");
    card.setAttribute("id", "newDiv")

    console.log(card)
    let para1 = document.createElement("p")
    para1.textContent = array[index].title
    card.appendChild(para1);
    resultDivs.appendChild(card);

    let para2 = document.createElement("p")
    para2.textContent = array[index].author
    card.appendChild(para2);
    resultDivs.appendChild(card);

    let para3 = document.createElement("p")
    para3.textContent = array[index].pages
    card.appendChild(para3);
    resultDivs.appendChild(card);

    let readBtn = document.createElement("button")
    readBtn.textContent = "Read";
    card.appendChild(readBtn)
    readBtn.setAttribute("id", "readBtn")

    
    let click = false;
    readBtn.addEventListener("click", () => {
        if (!click) {
            readBtn.style.backgroundColor = "red";
            readBtn.textContent = "It is not read";
            click = 1;
        }
        else {
            readBtn.style.backgroundColor = "green";
            click = 0;
        }
    })
    let removeBtn = document.createElement("button")
    removeBtn.textContent = "Remove";
    card.appendChild(removeBtn)

    removeBtn.addEventListener("click", () => {
        card.style.display = "none";
    })
}

