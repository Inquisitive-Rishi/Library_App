const cardContainer = document.querySelector('.container');
const addBtn = document.querySelector('.add-book');

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
    addToLibrary();
    showCard();
    console.log(myLibrary);
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


function addToLibrary() {
    myLibrary.push(book);
}
