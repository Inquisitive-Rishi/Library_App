
const footer = document.querySelector('.footer');
const addBtn = document.querySelector('header button')
const modal = document.querySelector('dialog')
const inputTitle = document.querySelector('input[id="title"]')
const inputName = document.querySelector('input[id="author"]')
const inputPages = document.querySelector('input[id="pages"]')
const checkBox = document.querySelector('input[type="checkbox"]')
const addBookBtn = document.querySelector('.add-card-btn')
const closeModalBtn = document.querySelector('.close-btn')

function Book(title,author,pages,checked) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.checked = checked;
}


addBtn.addEventListener('click', () => {
    modal.showModal()
})

closeModalBtn.addEventListener('click', () => {
    modal.close()
})

addBookBtn.addEventListener('click', (e) => {
    e.preventDefault()

})


footer.textContent = `Copyright © Rishi Raj ${new Date().getFullYear()}`

