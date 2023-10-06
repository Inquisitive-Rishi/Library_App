const cardContainer = document.querySelector('.container');
const showModalBtn = document.querySelector('.modal-btn');
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
    dialog.showModal();
})


