const meal = require("../data/meals.json");

const largeMeals = meal.filter((elem) =>{
    return elem.max_reservations > 75;

});
module.exports = largeMeals;