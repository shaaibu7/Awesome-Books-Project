/* eslint-disable */
class BookList {
  constructor() {
    this.container = document.querySelector('.books-container');
    this.formSection = document.getElementById('form-container');
  }

  removeBook(btn) {
    const parent = btn.parentElement;
    parent.parentElement.removeChild(parent);
    let books = JSON.parse(localStorage.getItem('books'));
    books = books.filter((book) => book.title !== btn.parentElement.children[0].innerHTML.slice(8));
    localStorage.setItem('books', JSON.stringify(books));
  }

  displayBooks() {
    const books = JSON.parse(localStorage.getItem('books'));
    this.container.innerHTML = '';
    if (books) {
      books.forEach((book) => {
        if (book.title && book.author) {
          const bookUI = document.createElement('div');
          bookUI.classList.add('book');
          bookUI.innerHTML = `
            <p class="book-title"> Title: ${book.title}</p>
            <div class= "book-author"> By ${book.author} </div>
            <button id = '${book.title}' type="button" class="remove-button"> Remove Book </button>
            `;
          this.container.appendChild(bookUI);
        }
      });
    }
    const removeBtns = Array.from(document.querySelectorAll('.remove-button'));
    removeBtns.forEach((btn) => btn.addEventListener('click', () => this.removeBook(btn)));
  }

  addToStore(bookObj, title, author) {
    if (title && author) {
      if (!localStorage.getItem('books')) {
        localStorage.setItem('books', JSON.stringify([]));
        const books = JSON.parse(localStorage.getItem('books'));
        books.push(bookObj);
        localStorage.setItem('books', JSON.stringify(books));
      } else {
        const books = JSON.parse(localStorage.getItem('books'));
        books.push(bookObj);
        localStorage.setItem('books', JSON.stringify(books));
      }
    }
  }

  formSubmit() {
    this.formSection.addEventListener('submit', (event) => {
      event.preventDefault();
      const title = document.getElementById('title').value;
      const author = document.getElementById('author').value;
      const bookObj = {
        title,
        author,
      };
      this.formSection.elements.title.value = '';
      this.formSection.elements.author.value = '';

      // Update the Storage and User Interface
      this.addToStore(bookObj, title, author);
      this.displayBooks();
    });
  }
}

const books = new BookList();

books.addToStore();
books.displayBooks();
books.formSubmit();

// selecting buttons
const listbtn = document.getElementById('link-list');
const addbtn = document.getElementById('link-add');
const contactbtn = document.getElementById('link-contact');
// slecting containers
const bc = document.getElementById('list');
const ac = document.getElementById('add-book');
const cc = document.getElementById('contact');

// adding event listeners
addbtn.addEventListener('click', () => {
  bc.style.display = 'none';
  ac.style.display = 'flex';
  cc.style.display = 'none';
});

listbtn.addEventListener('click', () => {
  bc.style.display = 'flex';
  ac.style.display = 'none';
  cc.style.display = 'none';
});

contactbtn.addEventListener('click', () => {
  bc.style.display = 'none';
  ac.style.display = 'none';
  cc.style.display = 'flex';
});

const date = document.getElementById('date');
// eslint-disable-next-line no-undef
const { DateTime } = luxon;
const now = DateTime.now();
date.innerText = now.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);