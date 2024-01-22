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

addBookBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const book = new Book(inputTitle.value, inputName.value, inputPages.value, checkBox.checked)
    pushBookToArray(book)
    console.log(library);

    const card = document.createElement('div')
    const title = document.createElement('p')
    const author = document.createElement('p')
    const pages = document.createElement('p')
    const isChecked = document.createElement('p')

    card.setAttribute('class', 'card')

    library.forEach(book => {
        for (const [key, value] of Object.entries(book)) {
            console.log(`${value}`);
        }
    })

    container.appendChild(card)
    modal.close()
})





footer.textContent = `Copyright © Rishi Raj ${new Date().getFullYear()}`

