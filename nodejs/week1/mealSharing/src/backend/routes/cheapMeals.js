const meal = require("../data/meals.json");

const cheapMeal = meal.filter(cheapMeal =>  cheapMeal.price <= 50)
module.exports = cheapMeal;