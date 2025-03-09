class Animal{
    alive = true;

    eat(){
        console.log(`This ${this.name} is eating!`)
    }

    sleep(){
        console.log(`This ${this.name} is sleeping!`)
    }
}

class Rabbit extends Animal{
    name = "rabbit";
}

class Fish extends Animal{
    name="fish"
}

class Hawk extends Animal{
    name="hawk"
}

const rabbit = new Rabbit()
rabbit.eat()
rabbit.sleep()