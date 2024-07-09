//superclass:
class Animal{
    constructor(name, habitat, food){
        this.name=name;
        this.habitat=habitat;
        this.food=food;
    }
    eat(){
        return `${this.name} eats ${this.food}`;
    }
    lives(){
        return `${this.name} lives in ${this.habitat}`;
    }
};
//subclass:
class Dog extends Animal{
    constructor(name, habitat, food, speed, lifespan){
        super(name, habitat, food); //constructor from superclass
        this.speed=speed;
        this.lifespan=lifespan;
    }
    run(){
        return `${this.name} runs at a speed of ${this.speed}kmph`;
    }
    survive(){
        return `${this.name} has a lifespan of ${this.lifespan} years`;
    }
    eat(){   //method with the same name
        return `Eating ${this.food} inside the subclass`;
    }
};

const dog=new Dog("dog", "kennel", "bone", 40, 15);
console.log(dog.habitat);
console.log(dog.run());
console.log(dog.survive());

const cat=new Animal("cat", "home", "fish");
console.log(cat.food);
console.log(cat.eat());
console.log(cat.lives());

console.log(cat.speed); //undefined.