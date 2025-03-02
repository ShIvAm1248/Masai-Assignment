const books = require("./books");

const booksum = books.map((book) => book.getSummary());

console.log(booksum);