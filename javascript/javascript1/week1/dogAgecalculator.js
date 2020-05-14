const dogYearOfBirth =2017  ;
const dogYearFuture = 2027;
const dogYear = dogYearFuture - dogYearOfBirth;
var shouldShowResultInDogYears = true; // this is boolean  data type

if(shouldShowResultInDogYears == false)
{
    console.log("Your dog will be "+ dogYear +" humman years old in "+ dogYearFuture);
    
}
else {
    console.log("Your dog will be "+ dogYear*6 +" dog years old in "+ dogYearFuture);

}