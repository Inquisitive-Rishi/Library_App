const footer = document.querySelector('.footer');
const addBtn = document.querySelector('header button')
const modal = document.querySelector('dialog')

addBtn.addEventListener('click', () => {
    modal.showModal()
})

footer.textContent = `Copyright © Rishi Raj ${new Date().getFullYear()}`