
// filtering as short title 
const shortTitleMovies = movies.filter(item => item.title.length <= 5);
//console.log(shortTitleMovies);


// filtering as long title 
const longTitleMovies = movies.filter((item) => item.title.length >= 10);
// console.log(longTitleMovies);


// filtering as year  
const moviesFormEighties = movies.filter( item => item.year >= 1980 && item.year <= 1989 

)
console.log(moviesFormEighties.length);

// adding tag prop to objects 
const tagArray = movies.filter(element => {
    if(element.rating >= 7){
        element.tag = "good"
    }
    else if (element.rating < 7 && element.rating >= 4 ){
        element.tag = "Average";
    }
    else{
        element.tag = "Bad ";
    }
   
    
});
    

// chaining array 
const moviesRating = movies.filter(element =>  element.rating > 6).map(element => {
    return element.rating
})
//console.log(moviesRating);

// search for words task , 
// i solved it by normal function 
// i don't if kan be solved by arrauy methods. 





const keyWordSearch = () => {
  let count = 0; 
  for (let i = 0; i < movies.length; i++) {
   if (
     movies[i].title.includes("surfer") ||
     movies[i].title.includes("Bejamen") ||
     movies[i].title.includes("Alien")
   ) {
     count += 1;
     
   }
 
    
  }
  console.log("the number of movies with surfer, Bejamen,Alien is " + count);
 
}
keyWordSearch();



// duplicated words .
/* let keyWordscount = 0;
 let duplictedWords = movies.map((element) =>
 {
   return element.title.split(" ")
 }).filter((item, index) => 
 console.log(movies.indexOf(item) === index))


  console.log(duplictedWords);
    
    */

     
   
  //it's not correct
// console.log(titles);
