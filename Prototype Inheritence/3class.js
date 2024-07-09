//classes in JS are fake:
//Because JavaScript doesn't have classes.
//it's a prototypE-based OOPL.
//Classes are implemented on top of its native OOP paradigm:
//i.e.,prototypal inheritance can mimic classical inheritance;
//the reverse is not true


class CreateUser{   //starting letter in uppercase
    constructor(firstName, lastName, email, age, address){
        console.log("constructor called");
        this.firstName=firstName;
        this.lastName=lastName;
        this.email=email;
        this.age=age;
        this.address=address;
    }
    about(){
        return `${this.firstName} is ${this.age} years old and lives in ${this.address}`;
    }
    is18(){
        return this.age>=18;
    }
    sing(){
        return 'la la la';
    }
    //no need to return the object as the 'new' keyword automatically returns the object after creation.
};

//creating objects as instances of the above class:
const user1=new CreateUser('Jane', 'Doe', 'janedoe123@gmail.com', 22, 'United Kingdom');
console.log(user1.about());
console.log(`The user is above 18 years of age: ${user1.is18()}`);
console.log(user1.sing());

console.log(Object.getPrototypeOf(user1));  //method to access the prototype of the object
console.log(Object.getOwnPropertyNames(user1));  //to fetch only those properties that belong to the user1 and not to the prototype