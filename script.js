const cardContainer = document.querySelector('.container');
const showModalBtn = document.querySelector('.add-book');
const modal = document.querySelector('#my-dialog');
const addCardBtn = document.querySelector('.add-card');
// const cards = document.querySelectorAll('.card')
// const removeCardBtn = document.querySelectorAll('.remove-btn');

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
    addCard();
    dataIdx++;

    const cards = document.querySelectorAll('.card')
    const removeCardBtn = document.querySelectorAll('.remove-btn');

    let remIdx;
    removeCardBtn.forEach(btn => {
        btn.addEventListener('click', ()=> {
            (dataIdx > 0) ? dataIdx-- : dataIdx = 0;
            remIdx = btn.dataset.idx;
            myLibrary.splice(remIdx,1);
            cards[remIdx].remove();
        })
    })

    console.log(cards)
    console.log(removeCardBtn);
    console.log(myLibrary);
    modal.close();
})

let dataIdx = 0;
function addCard() {
        const card = document.createElement('div');
        const h41 = document.createElement('h4');
        const author = document.createElement('p');
        const pages = document.createElement('p');
        const removeBtn = document.createElement('button');
        removeBtn.setAttribute('class','remove-btn');
        
        card.classList.add('card');
        card.setAttribute('data-idx',`${dataIdx}`);
        h41.classList.add('title');
        removeBtn.setAttribute(`data-idx`, `${dataIdx}`);
        removeBtn.classList.add(`remove-btn`);
        h41.textContent = `${myLibrary[myLibrary.length - 1].title}`;
        author.textContent = `written by: ${myLibrary[myLibrary.length - 1].author}`;
        pages.textContent = `Pages: ${myLibrary[myLibrary.length - 1].pages}`;
        removeBtn.textContent = "remove";
    
        card.appendChild(h41)
        card.appendChild(author)
        card.appendChild(pages)
        card.appendChild(removeBtn);
        cardContainer.appendChild(card);
    }; 

function addToLibrary() {
    myLibrary.push(book);
}

function removeEl(array,el) {
    const index = array.indexOf(el);
    if (index !== -1) array.splice(index,1);
    return array;
}