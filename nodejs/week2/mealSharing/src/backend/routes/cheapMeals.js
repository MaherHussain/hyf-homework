const meal = require("../data/meals.json");

const cheapMeal = meal.filter((cheapMeal) => { return cheapMeal.price <= 50;});
module.exports = cheapMeal;