const objectA = {
    a: 10,
    b: true
};

const copyOfA = objectA;
copyOfA["a"] = 5;
console.log(objectA);
objectA.a = 20;
console.log(objectA);
console.log(copyOfA);