console.log("Object Oriented Js")

// ! object
const car = {
    id: 1,
    name: 'lambo',
    model: 2019,
    drive(){
      return 'move like rock'
    }
}
console.log(car.drive());

// ! Class

// 1 create an class
class Car{
    // 2 constructor
    constructor(name,model = null){
        this.name = name;
        this.model = model;
    }
    // 3 class methods
    getInfo(){
         console.log(`This Car is ${this.name} and its model is ${this.model}`)
         return this;
    }
    getChain(){
        console.log('method chaining')
    }
}

let one = new Car('lambo'); // create an object
let two = new Car('Suzuki','2020');
console.log(one);
console.log(two)

one.getInfo();
two.getInfo().getChain(); // Method chaining

// ! class inheritance
class SuperCar extends Car {
    getSuperCar(){
        console.log(`I am super car called ${this.name}`)
    }
}

let supercar = new SuperCar('audi','2000');
supercar.getSuperCar();

// ! Contructor Function

function User(name){
    this.name = name;
    this.login = function(){
        console.log(`${this.name} is logged in now`)
    }
}
let uone = new User('thu htet');
console.log(uone);
uone.login();