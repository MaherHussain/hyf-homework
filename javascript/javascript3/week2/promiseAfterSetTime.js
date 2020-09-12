//promise solved after set time using fetch .
let time;

const promFunction = (time) =>{
    
    let promise = new Promise((resolve, reject) => {
        
      let seconds = time * 1000;
      setTimeout(() => {
        resolve("from promFunction is done after " + time + " sec");
      }, seconds);
    })
    .then(result => console.log(result))
    .catch(error => console.log("error"))

}
promFunction(8);









//promise solved after set time using async/await .
async function promiseAfterSetTime(time) {
  let seconds = time * 1000;

  let promise =  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("from async is done after " + time + " sec");
    }, seconds);
    
  });
  try{
       let result = await promise;
       console.log(result);
      
  }
  catch(error){
console.log("error")
  }
 
}
promiseAfterSetTime(8);