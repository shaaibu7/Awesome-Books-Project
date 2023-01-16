import BookList from './modules/main.js';
import navLinks from './modules/navLinks.js';
import dateContainer from './modules/datetime.js';

const books = new BookList();

books.addToStore();
books.displayBooks();
books.formSubmit();

navLinks();
dateContainer();