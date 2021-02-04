// server > filldata.js
const faker = require('faker');

const database = {
  clients: []
};

for (let i = 1; i <= 20; i++) {
  database.clients.push({
    id: i,
    firstName: faker.name.findName(),
    lastName: faker.name.jobTitle(),
    email: faker.internet.email(),
    address: faker.address.streetAddress(),
    imageUrl: faker.image.avatar()
  });
}

console.log(JSON.stringify(database));
