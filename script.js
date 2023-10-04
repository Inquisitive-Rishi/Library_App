const cardContainer = document.querySelector('.container');
const showModalBtn = document.querySelector('.add-book');
const modal = document.querySelector('#my-dialog');
const closeBtn = document.querySelector('.close-btn');
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


let title;
let author;
let pages;
let book;

showModalBtn.addEventListener('click', () => {
    modal.showModal();
})

addCardBtn.addEventListener('click', (e) => {
    e.preventDefault();
    title = titleIpt.value;
    author = authorIpt.value; 
    pages = pagesIpt.value;
    book = new Book(titleIpt.value,authorIpt.value,pagesIpt.value);
    if (!(title,author,pages)) {
        return;
    }
    addToLibrary();
    showCard();
    console.log(myLibrary);
    modal.close();
})

function showCard() {
        const card = document.createElement('div');
        const h41 = document.createElement('h4');
        const author = document.createElement('p');
        const pages = document.createElement('p');

        card.classList.add('card');
        h41.classList.add('title');
        h41.textContent = `${myLibrary[myLibrary.length - 1].title}`;
        author.textContent = `Author: ${myLibrary[myLibrary.length - 1].author}`;
        pages.textContent = `Pages: ${myLibrary[myLibrary.length - 1].pages}`;
    
        card.appendChild(h41)
        card.appendChild(author)
        card.appendChild(pages)
        cardContainer.appendChild(card);
}; 

closeBtn.addEventListener('click', () => {
    modal.close()
})

function addToLibrary() {
    myLibrary.push(book);
}
