let title;
let author;
let pages;
let book;
const btnChkcolor =  '#53f285';
const btnNotCheckedColor = '#fa3e3e';
const read = 'Read the book';
const unRead = 'Not read';

const cardContainer = document.querySelector('.container');
const showModalBtn = document.querySelector('.modal-btn');
const closeModalBtn = document.querySelector('.close-btn');
const dialog = document.querySelector('#dialog');
const addCardBtn = document.querySelector('.add-card');
const readChkBox = document.querySelector('#read');


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
    readChkBox.checked = false;
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
    dialog.close();

    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('click', (e) => {
            let idx = card.dataset.idx;
            myLibrary.splice(idx,1);
            if (e.target.textContent === 'remove') {
            card.remove();
            }
        })
    })
});



let dataIdx = 0;
function addToCard() {
    const card = document.createElement('div');
    const cardTitle = document.createElement('h3');
    const cardAuthor = document.createElement('p');
    const cardPages = document.createElement('p');
    const chkBtn = document.createElement('button');
    const removeBtn = document.createElement('button');

    cardTitle.textContent = titleIpt.value;
    cardPages.textContent = `${pagesIpt.value} pages`;
    cardAuthor.textContent = `Written by: ${authorIpt.value}`;
    removeBtn.textContent = 'remove';

    chkBtn.setAttribute('class','chk-btn');
    removeBtn.setAttribute('class','remove-btn')
    removeBtn.style.backgroundColor = 'white';
    card.setAttribute('data-idx',`${dataIdx}`);
    card.setAttribute('class','card');
    chkBtn.style.marginBottom = '5px'

    card.appendChild(cardTitle)
    card.appendChild(cardAuthor)
    card.appendChild(cardPages)
    card.appendChild(chkBtn);
    card.appendChild(removeBtn)
    cardContainer.appendChild(card);
    dataIdx++;          

    (readChkBox.checked) ? checkState(chkBtn) : uncheckState(chkBtn);
}

function checkState(btn) {
    btn.textContent = read;
    btn.style.backgroundColor = btnChkcolor;
}

function uncheckState(btn) {
    btn.textContent = unRead;
    btn.style.backgroundColor = btnNotCheckedColor;
    btn.style.color = 'white';
}