const addBtn = document.querySelector('.add-book');
const submitBtn = document.querySelector('.submit-book');

const myLibrary = [];

function Book(name='none',author='none',pages=0) {
    this.name = name
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

function addToLibrary() {
    myLibrary.push(book);
}
