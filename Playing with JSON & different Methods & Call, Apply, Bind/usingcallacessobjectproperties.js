let person = {
    fullName: function() {
      return `${this.firstName} ${this.age} `;
    }
  };
  
  let john = { firstName: "John", age: 25 };
  
  console.log(person.fullName.call(john));
  