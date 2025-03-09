// static = keyword that defines properties or methods that belong
// to a class rather than the objects created from that class
// class owns anything static, not the objects

class MathUtil{
    static PI = 3.14159;

    static getDiameter(radius){
        return radius * 2;
    }

    static circumference(radius){
        return 2 * this.PI * radius;
    }

    static getArea(radius){
        return this.PI * radius * radius
    }
}

console.log(MathUtil.PI)
console.log(MathUtil.getArea(5))


class User{
    static userCount = 0;

    constructor(username){
        this.username = username;
        User.userCount++;
    }

    sayHello(){
        console.log(`hello, my username is ${this.username}`)
    }

    static getUserCount(){
        console.log(User.userCount)
    }
}


const user1 = new User("tyuris")
const user2 = new User("dsdsd")


console.log(User.userCount)
User.getUserCount()