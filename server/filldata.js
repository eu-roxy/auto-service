// server > filldata.js
const faker = require('faker');

const database = {
  clients: []
};

let vehicleId = 1;

for (let i = 1; i <= 30; i++) {
  database.clients.push({
    id: i,
    firstName: faker.name.findName(),
    lastName: faker.name.findName(),
    email: faker.internet.email(),
    address: faker.address.streetAddress(),
    imageUrl: faker.image.avatar(),
    vehicles: getVehicles()
  });
}

function getVehicles() {
  let vehicles = [];

  for (let j = 1; j <= 3; j++) {
    vehicles.push({
      id: vehicleId,
      model: faker.commerce.productName(),
      year: faker.random.number(),
      km: faker.random.number(),
      image: faker.image.imageUrl(),
      brand: faker.company.companyName(),
      color: faker.internet.color()
    });
    vehicleId = vehicleId + 1;
  }

  return vehicles;
}

console.log(JSON.stringify(database));
