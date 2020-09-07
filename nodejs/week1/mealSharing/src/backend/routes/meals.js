

const meals = require("../data/meals.json");
const reviews = require("../data/reviews.json");

/* const allMeals = () =>{
  for (let i = 0; i < meals.length; i++) {
     meals[i].reviews = reviews.filter(review => meals[i].id == review.mealId) 
    
    
  }
}
allMeals(); */
 
     const mealsWithReviews = meals.map(meal => {
            // @ts-ignore
            meal.reviews = reviews.filter(
              (review) => review.mealId === meal.id
            );
                             
           return meal;
         });

module.exports = meals;
module.exports = reviews;