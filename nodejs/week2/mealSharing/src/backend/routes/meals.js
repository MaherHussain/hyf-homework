
 nodejs/week2
const express = require("express");
const router = express.Router();
const meals = require("../data/meals.json");

// filter efter maxprice 
router.get("/",( req, res)=> {
let maxPrice = req.query.maxPrice;
if (maxPrice){
    res.send(meals.filter(meal => meal.price <= Number(maxPrice))) 
}

// filter by title 
let title = req.query.title;
if (title) {
    let titlestring = meals.some(meal =>meal.title.includes(title))
    if(titlestring){
         res.send(
           meals.filter((meal) => {
             return meal.title.includes(title);
           })
         );
    }
    else{
        res.status(400).send(`no meal founded with title ${title}`)
    }

}

// filter by created date

let createdAfter = req.query.createdAfter
if(createdAfter){

    res.send(
        meals.filter(meal => meal.created_date > createdAfter)
    )

}
let limit = req.query.limit;
if(limit){
    let limitedmeals = [];
     for (let i = 0; i < parseInt(limit); i++) {
        limitedmeals.push(meals[i]);
      }
       res.send(limitedmeals);
    
   
}

    res.json(meals);

   
});

// search meal by id 
router.get("/:id",  (request, response) => {
  let mealId = request.params.id;
 const meal=  meals.find(meal => 
     meal.id === Number(mealId)
       )
      
     response.json(meal);

  
response.status(400).send("not founded");

});


// search meals by query


module.exports = router;


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
 master
