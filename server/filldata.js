// server > filldata.js
const { fake } = require('faker');
const faker = require('faker');

const database = {
  clients: [],
  users: []
};

// Set the starting ID for vehicles
let vehicleId = 1;

// Array with user roles (currently stored as string)
let userRoles = ['Admin', 'Mecanic']


/**
 * Create users
 */
for (let i = 1; i <= 5; i++) {
  database.users.push({
    id: i,
    firstName: faker.name.findName(),
    lastName: faker.name.findName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    address: faker.address.streetAddress(),
    imageUrl: faker.image.avatar(),
    role: faker.random.arrayElement(userRoles)
  });
}


/**
 * Create Clients
 */
for (let i = 1; i <= 30; i++) {
  database.clients.push({
    id: i,
    firstName: faker.name.findName(),
    lastName: faker.name.findName(),
    email: faker.internet.email(),
    address: faker.address.streetAddress(),
    imageUrl: faker.image.avatar(),
    vehicles: getVehicles(),
    userId: faker.random.arrayElement(database.users).id
  });
}


/**
 * Helper function for generating a list of vehicles and return it
 */
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
