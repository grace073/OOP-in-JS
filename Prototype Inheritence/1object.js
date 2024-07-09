//An object with methods that are reused. Saves memory.
const userMethods={
    about(){
        return `${this.firstName} is ${this.age} years old.`;
    },
    is18:function(){
        return this.age>=18;
    }
}
//Afunction that takes input, creates object and returns the object.
function createUser(firstName, lastName, email, age, address){
    const user=Object.create(userMethods); //created an empty object named user.
    user.firstName=firstName;
    user.lastName=lastName;
    user.email=email;
    user.age=age;
    user.address=address;
    user.about=userMethods.about; //reference to the above object
    user.is18=userMethods.is18;   //reference
    return user;
}
//creating users
const user1=createUser('Jane', 'Doe', 'janedoe123@gmail.com', 22, 'United Kingdom');


