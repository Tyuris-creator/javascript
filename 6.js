// порядок свойств не имеет значения
// СОЗДАНИЕ ОБЪЕКТА

const myCity = {
    city: 'New York',
    popular: true,
    country: 'USA'
}

console.log(myCity.city)
console.log(myCity.popular)
console.log(myCity.country) // dot notation точечная запись

myCity.city = 'Las Vegas';
console.log(myCity);

myCity.my_car = 'Peugeot 206';
console.log(myCity)

// удалять 
delete myCity["my_car"]
console.log(myCity)
delete myCity["country"]
console.log(myCity)
delete myCity.city
console.log(myCity)

const population = "population";

myCity[population] = 123
console.log(myCity)
delete myCity.population;
console.log(myCity)
