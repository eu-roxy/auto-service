//  server > filldata.js
const faker = require('faker');

const database = {
  clients: [],
  users: [],
  vehicles: [],
  inspections: []
};

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
    userId: faker.random.arrayElement(database.users).id
  });
}


/**
 * Create Vehicles
 */
for(let i = 1; i<=30; i++) {
  database.vehicles.push({
    id: i,
    model: faker.commerce.productName(),
    year: faker.random.number(),
    km: faker.random.number(),
    image: faker.image.imageUrl(),
    brand: faker.company.companyName(),
    color: faker.internet.color(),
    clientId: faker.random.arrayElement(database.clients).id,
  })
}

/**
 * Create Inspections
 */
for(let i = 1; i<=80; i++) {
  database.inspections.push({
    id: i,
    date: faker.date.past(),
    notes: faker.lorem.sentence(),
    cost: faker.commerce.price(),
    vehicleId: faker.random.arrayElement(database.vehicles).id,
  })
}


console.log(JSON.stringify(database));
