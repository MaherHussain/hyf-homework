

const meal = require("../data/meals.json");
const reviews = require("../data/reviews.json");




const allMeals = () =>{
  for (let i = 0; i < meal.length; i++) {
    const reviewedMeal = reviews.filter(review => meal[i].id == review.mealId) 
    meal[i].review = reviewedMeal;
    
  }
}
allMeals();

module.exports = meal;