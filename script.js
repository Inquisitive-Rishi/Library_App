let title;
let author;
let pages;
let book;

const cardContainer = document.querySelector('.container');
const showModalBtn = document.querySelector('.modal-btn');
const closeModalBtn = document.querySelector('.close-btn');
const dialog = document.querySelector('#dialog');
const addCardBtn = document.querySelector('.add-card');


const titleIpt = document.querySelector('#title')
const authorIpt = document.querySelector('#author')
const pagesIpt = document.querySelector('#pages');

const myLibrary = [];

function Book(title,author,pages) {
    this.title = title
    this.author = author
    this.pages = pages
}

showModalBtn.addEventListener('click', ()=> {
    titleIpt.value = authorIpt.value = pagesIpt.value = '';
    dialog.showModal();
})

closeModalBtn.addEventListener('click', ()=> {
    dialog.close();
})

function addToLibrary() {
    myLibrary.push(book);
}

addCardBtn.addEventListener('click', (e) => {
    e.preventDefault()
    title = titleIpt.value;
    author = authorIpt.value;
    pages = pagesIpt.value;
    book = new Book(title,author,pages);
    addToLibrary();
    addToCard();

    cardContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('remove-btn')) {
            const idx = e.target.getAttribute('data-idx');

            const cardToRemove = document.querySelector(`.card[data-idx='${idx}']`);
            cardToRemove.remove();

            myLibrary.splice(idx,1);

        }
    })
    dialog.close();
});

let dataIdx = 0;
function addToCard() {
    const card = document.createElement('div');
    const cardTitle = document.createElement('h3');
    const cardAuthor = document.createElement('p');
    const cardPages = document.createElement('p');
    const removeBtn = document.createElement('button');

    cardTitle.textContent = titleIpt.value;
    cardPages.textContent = `${pagesIpt.value} pages`;
    cardAuthor.textContent = `Written by: ${authorIpt.value}`;
    removeBtn.textContent = 'remove';

    removeBtn.setAttribute('class','remove-btn')
    removeBtn.setAttribute('data-idx',`${dataIdx}`);
    card.setAttribute('data-idx',`${dataIdx}`);
    card.setAttribute('class','card');

    card.appendChild(cardTitle)
    card.appendChild(cardAuthor)
    card.appendChild(cardPages)
    card.appendChild(removeBtn)
    cardContainer.appendChild(card);
    dataIdx++;
}


