const reservations = require("../data/reservations.json");

const randomReser =reservations[Math.floor(Math.random() * reservations.length)] 
module.exports = randomReser;