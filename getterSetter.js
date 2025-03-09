// getter speacial method that makes a property readable
// setter special method that makes a property writeable

// validate and modify a value when reading/writing a property

class Rectangle{
    constructor(width,height){
        this.width = width;
        this.height = height;
    }

    set width(newWidth){
        if (newWidth > 0){
            this._width = newWidth;
        }
        else{
            console.error("Width must be a positive number!")
        }
    }

    set height(newHeight){
        if (newHeight > 0){
            this._height = newHeight;
        }
        else{
            console.error("Height must be a positive number!")
        }
    }

    get width(){
        return this._width;
    }
    get height(){
        return this._height;
    }
}

// const rectangle = new Rectangle(-10000000000, "string"); doesnt make sense
// поэтому нужен геттер и сеттер

class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    set firstName(newFirstName){
        if(typeof newFirstName === 'string' && newFirstName.length > 0){
            this._firsName = newFirstName;
        }
        else {
            console.error("first name must be a non empty strings");
        }
    }
    set lastName(newLastName){
        if(typeof newLastName === 'string' && newLastName.length > 0){
            this._lastName = newLastName;
        }
        else {
            console.error("first name must be a non empty strings");
        }
    }

    set age(newAge){
        if (typeof newAge === "number" && newAge >= 0){
            this._age = newAge;
        }
        else{
            console.error("Age must be a non-negative number")
        }
    }

    get firsName(){
        return this._firsName;
    }
    get lastName(){
        return this._lastName
    }
    get age(){
        return this._age
    }

}

