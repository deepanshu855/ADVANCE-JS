//----- SECTION 1 -----

let obj= {
    name: "Deepanshu",
    email: "deepanshu@gmail.com",
    login: function(){
        console.log(`User logged in`);
    }
}

class User{
    constructor(name, email){
        this.name= name;
        this.email= email;
    }
}

User.prototype.login=  function() {
        console.log(`User logged in`)
    }

let user1= new User("Deepanshu", "deepanshu@gmail.com");
let user2= new User("Apeksha", "apeksha@gmail.com");
let user3= new User("Harsh", "harsh@gmail.com");

let product= {
    name: "Name",
    price: 1234,
    finalPrice: function(){
        return this.price- 200;
    }
}

// console.log(product.finalPrice());

//----- SECTION 2 -----

class Car{
    constructor(brand, speed){
        this.brand= brand;
        this.speed= speed;
    }

    drive(){
        console.log(this.brand, this.speed);
    }
}

let car1= new Car("Toyota", 100);
let car2= new Car("Maruti", 80);

//----- SECTION 3 -----

class Student{
    constructor(name, rollNo){
        this.name= name;
        this.rollNo= rollNo;
    }

    introduce(){
        console.log(this.name, this.rollNo);
    }
}

let s1= new Student("Deepanshu", 21);

//----- SECTION 4 -----
