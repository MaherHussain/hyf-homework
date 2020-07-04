
window.addEventListener("load", () => {
  setTimeout(() => {
    console.log("load efter 2,5 seconds");
  }, 2500);
});

// function with delay parameter
let delayfunction = (stringToLog,delay) =>{
setTimeout(() => {
    console.log(stringToLog)
}, delay);
}

const btn1 = document.getElementById('btn1');
btn1.onclick = () => {
delayfunction("this string logget after 2 seconds of btn clicked   ", 2000)};


// funtion with funtion parameter
let earthLogger = () =>{
    console.log("earth")
}
let saturenLogger = () =>{
    console.log("saturen")
}

function planetLogFunction(callback){
 callback();
}
planetLogFunction(saturenLogger);


// find loction
const demo = document.getElementById("demo");
const locationBtn = document.getElementById("locBtn");
locationBtn.onclick = function getLoction (){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPostion);
    } else {
      demo.innerHTML = "Geolocation is not supported by this browser.";
    }

}

let showPostion  = (position) =>{
    demo.innerHTML =
      "Latitude: " +
      position.coords.latitude +
      "<br> longitude " +
      position.coords.longitude; 
}



// function with parameters delay and callback function.
let runAfterDelay = (delay,callback) =>{
    delay = delay * 1000;
    console.log("delay "+ delay); 
setTimeout(callback,delay);
}

runAfterDelay(5,function(){
    console.log("should be logged afer 5 seconds")
})

// check if body clicke twice 
document.onclick = event =>{
    if(event.detail === 1){

    }
    else if( event.detail === 2){
        console.log("click twice ")
    }

}
let funyJockFunc = () =>{
    console.log("funy jock");
}
let badJockFunc = () => {
  console.log("bad jock");
};
//jock logger
let jokeCreator = (shouldTellFunnyJoke, logFunnyJoke, logBadJoke) => {
    if(shouldTellFunnyJoke == true){
        logFunnyJoke();
    }
    else{
         logBadJoke()
    }
}; 

jokeCreator(false,funyJockFunc,badJockFunc)
