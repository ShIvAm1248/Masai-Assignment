function createBook(title, author) {
    return {
      title,
      author,
      details() {
        console.log(`Title: ${this.title}, Author: ${this.author}`);
      }
    };
  }
  
  function createLibrary() {
    const books = []; 
  
    return {
      addBook(book) {
        books.push(book);
        console.log(`Added: "${book.title}" to the library.`);
      },
      removeBook(title) {
        const index = books.findIndex(book => book.title === title);
        if (index !== -1) {
          books.splice(index, 1);
          console.log(`Removed: "${title}" from the library.`);
        } else {
          console.log(`Book: "${title}" not found in the library.`);
        }
      },
      listBooks() {
        if (books.length === 0) {
          console.log("The library is empty.");
        } else {
          console.log("Books available in the library:");
          books.forEach(book => book.details());
        }
      }
    };
  }
  
  const library = createLibrary();
  
  const book1 = createBook("To Kill a Mockingbird", "Harper Lee");
  const book2 = createBook("1984", "George Orwell");
  
  library.addBook(book1);
  library.addBook(book2);
  
  library.listBooks();
  
  library.removeBook("1984");
  library.listBooks();
  