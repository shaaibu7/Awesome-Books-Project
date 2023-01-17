const navLinks = () => {
  const listbtn = document.getElementById('link-list');
  const addbtn = document.getElementById('link-add');
  const contactbtn = document.getElementById('link-contact');
  // slecting containers
  const booklistLink = document.getElementById('list');
  const addBookLink = document.getElementById('add-book');
  const contactLink = document.getElementById('contact');

  // adding event listeners
  addbtn.addEventListener('click', () => {
    booklistLink.style.display = 'none';
    addBookLink.style.display = 'flex';
    contactLink.style.display = 'none';
  });

  listbtn.addEventListener('click', () => {
    booklistLink.style.display = 'flex';
    addBookLink.style.display = 'none';
    contactLink.style.display = 'none';
  });

  contactbtn.addEventListener('click', () => {
    booklistLink.style.display = 'none';
    addBookLink.style.display = 'none';
    contactLink.style.display = 'flex';
  });
};

export default navLinks;