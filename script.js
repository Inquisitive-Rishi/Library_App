const container = document.querySelector('.container')
const footer = document.querySelector('footer');
const addBtn = document.querySelector('header button')
const modal = document.querySelector('dialog')
const inputTitle = document.querySelector('input[id="title"]')
const inputName = document.querySelector('input[id="author"]')
const inputPages = document.querySelector('input[id="pages"]')
const checkBox = document.querySelector('input[type="checkbox"]')
const addBookBtn = document.querySelector('.add-card-btn')
const closeModalBtn = document.querySelector('.close-btn')

addBtn.addEventListener('click', () => {
    modal.showModal()
})

closeModalBtn.addEventListener('click', () => {
    modal.close()
})

const library = []

function Book(title,author,pages,checked) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.checked = checked;
}

function pushBookToArray(x) {
    library.push(x)
}

function clearInput() {
    inputName.value=""
    inputTitle.value=""
    inputPages.value=""
    checkBox.checked=false
}

addBookBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const book = new Book(inputTitle.value, inputName.value, inputPages.value, checkBox.checked)
    pushBookToArray(book)
    clearInput()
    console.log(library);

    const card = document.createElement('div')
    const cardTitle = document.createElement('p')
    const cardAuthor = document.createElement('p')
    const cardPages = document.createElement('p')
    const isRead = document.createElement('button')

    card.setAttribute('class', 'card')
    cardTitle.setAttribute('class', 'card-title')
    cardAuthor.setAttribute('class', 'card-author')
    cardPages.setAttribute('class', 'card-pages')

    if (book.checked === true) {
        isRead.setAttribute('class', 'is-read') 
    } else {
        isRead.setAttribute('class', 'is-not-read')
    }
    // (book.checked === true) ? isRead.setAttribute('class', 'is-read') : isRead.setAttribute('class', 'is-not-read')


    cardTitle.textContent = book.title
    cardAuthor.textContent = 'written by ' + book.author
    cardPages.textContent = book.pages + ' pages'
    isRead.textContent = (book.checked === true) ? 'You\'ve read it' : 'You havent read it'

    const cardContents = [cardTitle, cardAuthor, cardPages, isRead]
    cardContents.forEach(content => card.appendChild(content))


    container.appendChild(card)
    modal.close()
})





footer.textContent = `Copyright © Rishi Raj ${new Date().getFullYear()}`

