class Book{
    constructor(title,author,year){
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary(){
        return `${this.title} by ${this.author}, published in ${this.year}`
    }
}

const books = [
    new Book("the book1","scott",2021)
]

module.exorts = books;

