

const meal = require("../data/meals.json");
const review = require("../data/reviews.json");

let mealWithReview = [],
mealWithoutReview = [];


const allMeals = () =>{
for (let i = 0; i < meal.length; i++) {
  for (let r = 0 ; r < review.length ; r++ ){
    if(meal[i].id == review[r].mealId){
      mealWithReview.push(review[r]);
      // @ts-ignore
      meal[i].reviews = mealWithReview;
      
    }
    else{
      // @ts-ignore
      meal[i].reviews = mealWithoutReview;

    }
  }
  
  
}
}

allMeals();

module.exports = meal;