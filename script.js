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

const library = [
    {title: 'The Mahabharata', author: 'Ved Vyasa', pages: 2923, checked: true},
    {title: 'The Ramayana', author: 'Maharishi Walmiki', pages: 3212, checked: true},
    {title: 'To Kill a Mockingbird', author: 'Harper Lee', pages: 343, checked: false},
    {title: 'Harry Potter and the Philosopher\'s Stone', author: 'J.K. Rowling', pages: 344, checked: false},
    {title: 'The Catcher in the Rye', author: 'J.D. Salinger', pages: 421, checked: true},
    {title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', pages: 342, checked: false}
]

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

console.log(library);

addBookBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const book = new Book(inputTitle.value, inputName.value, inputPages.value, checkBox.checked)
    pushBookToArray(book)
    clearInput()
    console.log(library);
    modal.close()
})

function displayCards() {
    library.forEach(card => {
        const cardDiv = document.createElement('div')
        const cardTitle = document.createElement('p')
        const cardAuthor = document.createElement('p')
        const cardPages = document.createElement('p')
        const cardIsChecked = document.createElement('p')

        cardDiv.setAttribute('class', 'card')
        cardTitle.setAttribute('class', 'card-title')
        cardAuthor.setAttribute('class', 'card-author')
        cardPages.setAttribute('class', 'card-pages')
        
        cardTitle.textContent = card.title;
        cardAuthor.textContent = card.author;
        cardPages.textContent = card.pages;
        
        if (card.checked) {
            cardIsChecked.textContent = "Book is read"
            cardIsChecked.classList.add("is-read")
        } else {
            cardIsChecked.textContent = "Book is not read"
            cardIsChecked.classList.add("is-not-read")
        }
        

        const elements = [cardTitle, cardAuthor, cardPages, cardIsChecked]
        // card.appendChild(cardTitle)
        // card.appendChild(cardAuthor)
        // card.appendChild(cardPages)
        // card.appendChild(cardIsChecked)
        elements.forEach(el => cardDiv.appendChild(el))
        container.appendChild(cardDiv)
    })

}

displayCards()

footer.textContent = `Copyright © Rishi Raj ${new Date().getFullYear()}`