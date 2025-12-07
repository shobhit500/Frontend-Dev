class Book {
  constructor(title, author, ISBN, isIssued = false) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.isIssued = isIssued;
  }

  // Mark book as issued
  issueBook() {
    if (!this.isIssued) {
      this.isIssued = true;
      console.log(`Book issued: ${this.title}`);
    } else {
      console.log("Book is already issued.");
    }
  }

  // Mark book as returned
  returnBook() {
    if (this.isIssued) {
      this.isIssued = false;
      console.log(`Book returned: ${this.title}`);
    } else {
      console.log("Book was not issued.");
    }
  }
}

// Sample book list
const library = [
  new Book("The Alchemist", "Paulo Coelho", "101"),
  new Book("Clean Code", "Robert C. Martin", "102"),
  new Book("Atomic Habits", "James Clear", "103"),
  new Book("Deep Work", "Cal Newport", "104", true)
];

// Display available books
function showAvailableBooks() {
  console.log("\nAvailable Books:");
  library
    .filter(book => !book.isIssued)
    .forEach(b => {
      console.log(`${b.title} - ${b.author} (ISBN: ${b.ISBN})`);
    });
}

// Issue book by ISBN
function issueByISBN(ISBN) {
  const book = library.find(b => b.ISBN === ISBN);

  if (!book) {
    console.log("Book not found.");
    return;
  }

  book.issueBook();
}

// Demo
showAvailableBooks();
issueByISBN("102");
showAvailableBooks();
