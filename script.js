function miniBooks(title, author, pages, pagesRead) {    //miniBooks constructor
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.pagesRead = pagesRead
}

const myLibrary = [];

//------------DOM elements
const newBookBtn = document.getElementById('new-book'); //-----------------addBtn
const formContainer = document.getElementById('form-container'); //--------Form
const cancelBtn = document.getElementById('cancel'); //--------------------Cancel
const booksContainer = document.getElementById('books-container'); //------Books Container

//------------Form elements
const formTitle = document.getElementById('book-name'); //Book name
const formAuthor = document.getElementById('author'); //Book author
const formPages = document.getElementById('pages'); //Number of pages the book has
const formPagesRead = document.getElementById('pages-read'); //Pages read from this book
const addBookBtn = document.getElementById('add'); //Add Book Btn

//--------------Info counters
const bookCounter = document.getElementById('book-number');
const pagesCounter = document.getElementById('pages-number');
const readCounter = document.getElementById('pages-numbe-read');

//------------Listener Events
addBookBtn.addEventListener('click', () => {
    if (formTitle.value != '' && formAuthor.value != '' && formPages.value != '') {
        createNewBook();
    } else alert('Please fill all the spaces');
});
cancelBtn.addEventListener('click', cancelFunction);
newBookBtn.addEventListener('click', showForm);


//------------Functions
function showForm() {
    formContainer.style.display = 'flex';
    this.style.display = 'none';
}

function cancelFunction() {
    formContainer.style.display = 'none';
    newBookBtn.style.display = 'flex';
}

function createNewBook() {
    const miniBook = Object.create(new miniBooks(formTitle.value, formAuthor.value, formPages.value, formPagesRead.value));
    const newBook = document.createElement('div'); //Mini book div
    newBook.classList.add('minibook');
    if (formPages.value === formPagesRead.value) newBook.style.backgroundColor = 'var(--valid-hover)';
    newBook.style.color = '#fff';

    const newBookTitle = document.createElement('div'); //Title div
    newBookTitle.classList.add('minibook-title');
    newBookTitle.textContent = '"' + miniBook.title + '"';
    
    const newBookAuthor = document.createElement('div'); //Author div
    newBookAuthor.classList.add('minibook-author');
    newBookAuthor.textContent = 'By ' + miniBook.author;
    
    const newBookPages = document.createElement('div'); //Author div
    newBookPages.classList.add('minibook-pages');
    newBookPages.textContent = miniBook.pages + ' pages';
    
    const newBookPagesRead = document.createElement('div'); //Author div
    newBookPagesRead.classList.add('minibook-pages-read');
    newBookPagesRead.textContent = miniBook.pagesRead + ' pages read';

    newBook.appendChild(newBookTitle);
    newBook.appendChild(newBookAuthor);
    newBook.appendChild(newBookPages);
    newBook.appendChild(newBookPagesRead);
    
    myLibrary.push(miniBook)
    booksContainer.appendChild(newBook);

    formContainer.style.display = 'none';
    formTitle.value = '';
    formAuthor.value = '';
    formPages.value = '';
    formPagesRead.value = '';

    newBookBtn.style.display = 'flex';
    bookCounter.textContent = myLibrary.length;
    pagesCounter.textContent = Number(pagesCounter.textContent) + Number(miniBook.pages);
    readCounter.textContent = Number(readCounter.textContent) + Number(miniBook.pagesRead);
}
