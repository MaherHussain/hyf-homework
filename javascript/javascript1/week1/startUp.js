var firstWord = [
  "Maher",
  "Ahmad",
  "jan",
  "Essam",
  "Florin",
  "Hello ",
  "World",
  "startup",
  "javascript",
  "html",
];
var secondWord = [
  "Hussain",
  "css",
  "bootstrap",
  "jquery",
  "c#",
  "asp.net",
  "php",
  "react",
  "vue",
  "vuc",
];

const randomNumber = Math.floor(Math.random() * 10) + 0;
var startUpName = firstWord[randomNumber] + " " + secondWord[randomNumber];
console.log(
  "the startup is " +
    startUpName +
    " and it conatins " +
    startUpName.length +
    " characters"
);
