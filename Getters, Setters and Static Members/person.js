class Person{
    constructor(firstName, lastName, age, hobby){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
        this.hobby=hobby;
    }
    static func(){
        return "Static Function inside Person class";
    }
    static decription="Person Class";
    // fullname(){ //this function would need to be called as a method                                             
    //     return `${this.firstName} ${this.lastName}`; 
    // }
    get fullname(){ //the above function will be called as a property and not as a method
        return `${this.firstName} ${this.lastName}`;
    }
    set fullname(fullname){
        const [firstName, lastName]=fullname.split(" ");//Destructuring
        this.firstName=firstName;
        this.lastName=lastName;
    }
};

const user1= new Person("Jane", "Doe", 10, "singing");
console.log(user1.fullname);
console.log(user1.firstName);
console.log(user1.age);
user1.fullname="Mary Poppins";
console.log(user1.fullname);
console.log(user1.firstName);
console.log(user1.lastName);
console.log(user1.hobby);

//console.log(user1.fullname());//Type Error:fullname is not a method.

console.log(Person.decription);
//console.log(person1.description) //throws error
console.log(Person.func()); //can be called for class; cannot be called for objects.
//console.log(person1.func()) //throws error
