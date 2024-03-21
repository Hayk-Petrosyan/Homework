// 1. Create an Author class and a Book class.Author should have: name, email, gender.

// Author
class Author {
    constructor (name, email, gender) {
        this._name = name
        this._email = email
        this._gender = gender
    }

    get name() {
        return this._name
    }
    get email() {
        return this._email
    }
    get gender() {
        return this._gender
    }

    toString () {
        return this
        // return `My name is ${this._name}. ${this._email} is my Email and I am ${this._gender}.`
    }
}

const myAuthor = new Author('Anderson', 'anderson@.com', 'female')
console.log(myAuthor.name);


// Book
class Book {
    constructor (title, author, price, quantity) {
        this._title = title
        this._author = author
        this._price = price
        this._quantity = quantity 
    }

    get title() {
        return this._title
    }
    get author() {
        return this._author 
    }
    get price() {
        return this._price
    }
    get quantity() {
        this._quantity
    }

    getProfit () {
        return this._price * this._quantity + ' ' + 'AMD'
    }

    toString () {
        return this
    }
}

const myBook = new Book('Picture of Dorian Gray', 'Oscar Wilde', 3000, 4)
console.log(myBook.getProfit());
// ==================================================

// 2. Create an Account class. 

// Account
class Account {
    constructor (id, name, balance) {
        this.id = id
        this.name = name
        this.balance = balance
    }

    set name (newName) {
        if (typeof newName !== 'string' || newName.length < 4) {
            console.error('The name must be a non-empty string');
        } else {
            this._name = newName
        }
    }

    set balance (newBalance) {
        if (typeof newBalance !== 'number' || !newBalance >= 0) {
            this._balance = newBalance
        } else {
            console.error('Invalid balance!');
        }
    }

    get name () {
        return this._name
    }

    get balance () {
        return this._balance
    }
    // get id () {
    //     return this._balance
    // }

    debit (amount) {
        if (amount > this._balance) {
            console.log('Amount exceeded balance');
        } else {
            return this._balance - amount
        }
    }

    transferTo (anotherAccount, amount) {
        if (amount > this._balance) {
            console.log('Amount exceeded balance');
        } else {
            return anotherAccount + (this._balance - amount)
        }
    }

    static  identifyAccounts (accountFirst, accountSecond) {

    }

    toString() {
        return this
    }
}

let myAccount = new Account(2, 'John', 123)
console.log(myAccount.transferTo(20, 100));
// =========================================================

// 3. Write classes: Person, Student

// Person
class Person {
    constructor (firstName, lastName, gender, age) {
        this.firstName = firstName
        this.lastName = lastName
        this.gender = gender
        this.age = age
    }

    set firstName (newName) {
        this._firstName = newName
    }
    set lastName (newSurname) {
        this._lastName = newSurname
    }
    set gender (newGender) {
        this._gender = newGender
    }
    set age (newAge) {
        this._age = newAge
    }

    get firstName () {
        return this._firstName
    }
    get lastName () {
        return this._lastName
    }
    get gender () {
        return this._gender
    }
    get age () {
        return this._age
    }

    toString () {
        return this
    }
}


// Student inherits values from Account
class Student extends Person {
    constructor (firstName, lastName, gender, age, program, year, fee) {
        super(firstName, lastName, gender, age)
        this.program = program
        this.year = year
        this.fee = fee
    }

    set program (programValue) {
        this._program = programValue
    }
    set year (yearValue) {
        this._year = yearValue
    }
    set fee (feeValue) {
        this._fee = feeValue
    }

    get program () {
        return this._program
    }
    get year () {
        return this._year
    }
    get fee () {
        return this._fee
    }



    passExam(subject, borderlineGrade) {
        
        const indexOfProgramName = this.program.findIndex(subjectItem => subjectItem.programName === subject)
        if (indexOfProgramName !== -1) {
            // However, we can change either the method "every" into "some" or 
            // increase one of the grades until it's above 50 in array "studentProgram" to make sure the method works properly 
            const examPassed = this.program.every(exam => exam.grade >= borderlineGrade)
            if (examPassed) {
                return `Congratulations! You've passed the course and will study next year - ${++this.year}`
            } else {
                return 'Oops! You failed the course!'
            }
        } else {
            return 'The subject is not found!'
        }
    }

    toString() {
        return this
    }
}

const studentProgram = [
    { programName: "Statistics", grade: 60},
    { programName: "Maths", grade: 80 },
    { programName: "Computer Science", grade: 50 },
    { programName: "Engineering", grade: 70},
    { programName: "Design", grade: 55 }
];

const studentResult = new Student('Michael', 'Douglas', 'male', 50, studentProgram, 2024, 2000)
console.log(studentResult.passExam('Engineering', 50));