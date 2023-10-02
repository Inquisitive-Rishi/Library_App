const cardContainer = document.querySelector('.container');
const addBtn = document.querySelector('.add-book');
const submitBtn = document.querySelector('.submit-book');
const showBtn = document.querySelector('.show-books');

const myLibrary = [];

function Book(title='none',author='none',pages=0) {
    this.title = title
    this.author = author
    this.pages = pages
}

let title;
let author;
let pages;
let book;

addBtn.addEventListener('click', () => {
    title = prompt('Title?');
    author = prompt("Author?") 
    pages = parseInt(prompt('No of pages?'));
    book = new Book(title,author,pages);
})

submitBtn.addEventListener('click', ()=> {
    addToLibrary();
    console.log(myLibrary);
});


showBtn.addEventListener('click', () => {
    for (let i = 0; i < myLibrary.length; i++) {
        const card = document.createElement('div');
        const h41 = document.createElement('h4');
        const author = document.createElement('p');
        const pages = document.createElement('p');
    
        card.classList.add('card');
        h41.classList.add('title');
        h41.textContent = `${myLibrary[i].title}`;
        author.textContent = `Author: ${myLibrary[i].author}`;
        pages.textContent = `Pages: ${myLibrary[i].pages}`;
    
        card.appendChild(h41)
        card.appendChild(author)
        card.appendChild(pages)
        cardContainer.appendChild(card);
    }
});


function addToLibrary() {
    myLibrary.push(book);
}
