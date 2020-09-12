const meal = require("../data/meals.json");
/* const randomElement = array[Math.floor(Math.random() * array.length)]; */


const randomMeal= meal[Math.floor(Math.random() * meal.length)]
module.exports = randomMeal;