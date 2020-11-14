class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    greet() {
        console.log(`\nHi, I'm ${this.name} and I'm ${this.age} years old`);    
    }
}

class Manager extends Person {
    constructor(name, age, managees) {
        super(name, age) 
        this.managees = managees
    }
    greet() {
        Person.prototype.greet.call(this);
        let greetMsg = `I manage `;
        for(let i=0; i<this.managees.length; i+=1){
            greetMsg += `${this.managees[i].name},`
        }
        console.log(`${greetMsg}`);
    }
}

class Developer extends Person {
    constructor(name, age, skillset) {
        super(name, age) 
        this.skillset = skillset
    }
    greet() {
        Person.prototype.greet.call(this);
        console.log(`I know ${this.skillset.join()}`);
    }
}

let maria = new Developer('Maria Popova', 23, ['Python', 'Machine Learning']);
let pesho = new Developer('Petar Petrov', 19, ['JavaScript', 'Angular', 'React', 'Vue']);
let gates = new Manager('Bill Gates', 43, [maria, pesho]);

maria.greet();
pesho.greet();
gates.greet();
