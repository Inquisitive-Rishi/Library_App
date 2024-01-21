
const footer = document.querySelector('.footer');
const addBtn = document.querySelector('header button')
const modal = document.querySelector('dialog')
const closeModalBtn = document.querySelector('.close-btn')

addBtn.addEventListener('click', () => {
    modal.showModal()
})

closeModalBtn.addEventListener('click', () => {
    modal.close()
})

footer.textContent = `Copyright © Rishi Raj ${new Date().getFullYear()}`

