function Person(name,age){
    this.name = name;
    this.age = age;
}
Person.prototype.introduce = function(){
    console.log(`${this.name} ${this.age}`);
}

function Employee(name,age,jobtitle){
    Person.call(this,name,age);
    this.jobtitle = jobtitle;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.work = function(){
    console.log(`${this.name} working ${this.jobtitle}`)
}

const Person1 = new Person("Alice",20);
const employee = new Employee("Bob",21,"Software Engineer");

Person1.introduce();
employee.introduce();
employee.work();