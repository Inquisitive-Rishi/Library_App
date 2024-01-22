
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

function pushBookToArray(book) {
    library.push(book)
}

addBookBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const book = new Book(inputTitle.value, inputName.value, inputPages.value, checkBox.checked)
    pushBookToArray(book)
    console.log(library);
    modal.close()
})



footer.textContent = `Copyright © Rishi Raj ${new Date().getFullYear()}`

