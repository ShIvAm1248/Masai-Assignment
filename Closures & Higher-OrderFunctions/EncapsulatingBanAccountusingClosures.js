function createBankAccount(amount) {
  var balance = 100;
  return {
    deposit: function (amount) {
      balance = amount + balance;
      return balance;
    },

    withdraw: function (amount) {
      balance = balance - amount;
      return balance;
    },

    getBalance: function () {
      return balance;
    },
  };
}
const account = createBankAccount(50);
console.log(account.deposit(50)); // Output: 150

console.log(account.withdraw(30)); // Output: 120

console.log(account.getBalance()); // Output: 120
