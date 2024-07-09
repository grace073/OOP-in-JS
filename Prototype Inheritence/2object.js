//instead of creating a new object for the methods, we can use the prototype property of the function.
//prototype is the empty object provided by the function


function createUser(firstName, lastName, email, age, address){
    const user=Object.create(createUser.prototype); //created an empty object named user.
    user.firstName=firstName;
    user.lastName=lastName;
    user.email=email;
    user.age=age;
    user.address=address;
    return user;
}


//adding prototypes:
createUser.prototype.about=function(){
    return `${this.firstName} is ${this.age} years old.`;
};
createUser.prototype.is18=function(){
    return this.age>=18;
};
createUser.prototype.sing=function(){
    return "la la la";
};

const user1=createUser('Jane', 'Doe', 'janedoe123@gmail.com', 22, 'United Kingdom');

