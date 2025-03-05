const myCity = {
    city: 'New York',
    info: {
        isPopular: true,
        country: 'USA'
    }
}

console.log(myCity['info']['isPopular']);

const name = 'Misha';
const postQty = '21';

const userProfile = {
    name,
    postQty,
    hasSignedAgreement: false
}
console.log(userProfile)