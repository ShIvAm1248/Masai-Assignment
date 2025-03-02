class Person {
    constructor(fullName, contactEmail) {
        this.fullName = fullName;
        this.contactEmail = contactEmail;
    }
    fetchDetails() {
        console.log(`Name: ${this.fullName}, Email: ${this.contactEmail}`);
    }
}

class Learner extends Person {
    constructor(fullName, contactEmail, learnerId) {
        super(fullName, contactEmail);
        this.learnerId = learnerId;
    }

    register() {
        console.log(`Student ${this.fullName} enrolled`);
    }
}

class Mentor extends Person {
    constructor(fullName, contactEmail, mentorId) {
        super(fullName, contactEmail);
        this.mentorId = mentorId;
    }

    assignCourse() {
        console.log(`Instructor ${this.fullName} assigned`);
    }
}

const learner1 = new Learner("Alice", "alice@gmail.com", "S12");
const mentor1 = new Mentor("Bob", "bob@gmail.com", "I12");

learner1.fetchDetails();
learner1.register();

mentor1.fetchDetails();
mentor1.assignCourse();
