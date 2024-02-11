const container = document.querySelector('.container')
const footer = document.querySelector('footer');
const addBtn = document.querySelector('header button')
const modal = document.querySelector('dialog')
const inputTitle = document.querySelector('input[id="title"]')
const bookCount = document.querySelector('.book-count')
const inputName = document.querySelector('input[id="author"]')
const inputPages = document.querySelector('input[id="pages"]')
const checkBox = document.querySelector('input[type="checkbox"]')
const addBookBtn = document.querySelector('.add-card-btn')
const closeModalBtn = document.querySelector('.close-btn')

addBtn.addEventListener('click', () => {
    modal.showModal()
    this.focus()
})

closeModalBtn.addEventListener('click', () => {
    modal.close()
})

const library = [
    {title: 'The Mahabharata', author: 'Ved Vyasa', pages: 2923, checked: true},
    {title: 'The Ramayana', author: 'Maharishi Walmiki', pages: 3212, checked: true},
    {title: 'To Kill a Mockingbird', author: 'Harper Lee', pages: 343, checked: false},
    {title: 'Harry Potter and the Philosopher\'s Stone', author: 'J.K. Rowling', pages: 344, checked: false},
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

addBookBtn.addEventListener('click', (e) => {
    e.preventDefault()
    clearCardContainer()
    const book = new Book(inputTitle.value, inputName.value, inputPages.value, checkBox.checked)
    clearInput()
    pushBookToArray(book)
    console.log(library);
    displayCards()
    modal.close()
})

function clearLibrary() {
    while (library.length > 0) {
        library.pop()
    }
}

container.addEventListener('click', (e) => {
    const libraryCopy = [...library]
    let deleteBtn = e.target
    if (deleteBtn.textContent === 'delete') {
        const card = deleteBtn.parentNode;
        const cardTitle = card.firstChild.textContent
        const cardPages = Number(card.children[2].textContent.split(":")[1].trim())
        const titleIndex = libraryCopy.findIndex(book => book.title === cardTitle)
        const pagesIndex = libraryCopy.findIndex(book => book.pages === cardPages)
        clearLibrary()
        clearCardContainer()
        for (let i = 0; i < libraryCopy.length; i++) {
            if (!(i === titleIndex && i === pagesIndex)) {
                console.log(i);
                library.push(libraryCopy[i])
            }
        }
        displayCards()
    }
   
})

function clearCardContainer() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function displayCards() {   
    bookCount.textContent = `Books Available: ${library.length}`
    library.forEach(card => {
        const cardDiv = document.createElement('div')
        const cardTitle = document.createElement('p')
        const cardAuthor = document.createElement('p')
        const cardPages = document.createElement('p')
        const cardIsChecked = document.createElement('button')
        const removeBookBtn = document.createElement('button')

        cardDiv.setAttribute('class', 'card')
        cardTitle.setAttribute('class', 'card-title')
        cardAuthor.setAttribute('class', 'card-author')
        cardPages.setAttribute('class', 'card-pages')
        removeBookBtn.setAttribute('class', 'remove-book-btn')
        
        cardTitle.textContent = card.title;
        cardAuthor.textContent = "written by: "+ card.author;
        cardPages.textContent = "pages: "+ card.pages;
        removeBookBtn.textContent = 'delete'
        cardPages.style.marginBottom = 'auto'

        const checkedTxt = "Book is read"
        const notCheckedTxt = "Book is not read"
        
        addStatus()

        cardIsChecked.addEventListener('click', () => {
            toggleRead()
        })

        const elements = [cardTitle, cardAuthor, cardPages, cardIsChecked, removeBookBtn]
        elements.forEach(el => cardDiv.appendChild(el))
        container.appendChild(cardDiv)

        // toggle read status
        function toggleRead() {
            if (cardIsChecked.textContent === checkedTxt) {
                cardIsChecked.textContent = notCheckedTxt
                cardIsChecked.classList.remove('is-read')
                cardIsChecked.classList.add('is-not-read')
            } else {
                cardIsChecked.textContent = checkedTxt
                cardIsChecked.classList.remove('is-not-read')
                cardIsChecked.classList.add('is-read')
            }
        }

        function addStatus() {
            if (card.checked) {
                cardIsChecked.textContent = checkedTxt
                cardIsChecked.classList.add("is-read")
            } else {
                cardIsChecked.textContent = notCheckedTxt
                cardIsChecked.classList.add("is-not-read")
            }
        }
    })
}
displayCards()


footer.textContent = `Copyright © Rishi Raj ${new Date().getFullYear()}`