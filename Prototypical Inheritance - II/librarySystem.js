function Publication(name, writer, available = true) {
    this.name = name;
    this.writer = writer;
    this.available = available;
}

function User(username) {
    this.username = username;
    this.loanedBooks = [];
}

User.prototype.loanBook = function(volume) {
    if (this.loanedBooks.length >= 3) {
        console.log(`${this.username} cannot borrow more than 3 books`);
        return;
    }
    if (volume.available) {
        volume.available = false;
        this.loanedBooks.push(volume.name);
        console.log(`${this.username} borrowed ${volume.name}`);
    } else {
        console.log(`${volume.name} is already borrowed`);
    }
};

function EliteUser(username) {
    User.call(this, username);
    this.specialAccess = true;
}

EliteUser.prototype = Object.create(User.prototype);
EliteUser.prototype.constructor = EliteUser;

EliteUser.prototype.loanBook = function(volume) {
    if (this.loanedBooks.length >= 5) {
        console.log(`${this.username} cannot borrow more than 5 books`);
        return;
    }
    User.prototype.loanBook.call(this, volume);
};

const volume1 = new Publication("Book One", "Author A");
const volume2 = new Publication("Book Two", "Author B");
const volume3 = new Publication("Book Three", "Author C");
const volume4 = new Publication("Book Four", "Author D");
const volume5 = new Publication("Book Five", "Author E");
const volume6 = new Publication("Book Six", "Author F");
const volume7 = new Publication("Book Seven", "Author G");

const normalUser = new User("Alice");
const premiumUser = new EliteUser("Bob");

normalUser.loanBook(volume1);
normalUser.loanBook(volume2);
normalUser.loanBook(volume3);
normalUser.loanBook(volume4);

premiumUser.loanBook(volume4);
premiumUser.loanBook(volume5);
premiumUser.loanBook(volume6);
premiumUser.loanBook(volume1);

const borrowAlice = normalUser.loanBook.bind(normalUser, volume6);
borrowAlice();
