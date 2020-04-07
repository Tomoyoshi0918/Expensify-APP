// const person = {
//   name: 'Mario',
//   age: 20,
//   location: {
//     city: 'Peach castle',
//     temp: 92
//   }
// };
// const { name: firstName = 'anonymous', age } = person;
// // const name = person.name
// // const age = person.age
// console.log(`${firstName} is ${age}`);

// const { city, temp: temperature } = person.location
// if (city && temperature) {
//   console.log(`Tt's ${temperature} in ${city}`);
// }

// const book = {
//   title: 'Mario book',
//   auther: 'Luigi',
//   publisher: {
//     name: 'Kinopino'
//   }
// };

// const { publisher: publisherName = 'Self-Publishe' } = book.publisher;
// console.log(publisherName);

const address = ['1299 S Juniper Street', 'Philadelphia', 'pennsylvania', '19147'];
const [, , city, state = 'NewYork'] = address;
console.log(`You are in ${city} ${state}`);


const item = ['Coffee (hot)', '$2.00', '$3.50', '$2.75'];
const [itemName, , mediumPrice] = item;
console.log(`A medium${itemName} costs ${mediumPrice}`);
