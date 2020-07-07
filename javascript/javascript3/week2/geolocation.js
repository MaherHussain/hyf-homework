const setTimeoutPromise = (timeout) =>{
     let promise = new Promise((resolve, reject) => {
       let seconds = timeout * 1000;
       setTimeout(() => {
         resolve("Called after " + timeout + " seconds");
       }, seconds);
     })
       .then((result) => console.log(result))
       .catch((error) => console.log("error"));

}
//setTimeoutPromise(3); 





  async function getCurrentLocation(postion) {
    // const latitude = postion.coords.latitude;
    // const longitude = postion.coords.longitude;
    try {
      fetch(
        `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`
      ).then((postion) => {
        console.log(postion);
      });
    } catch (error) {
      console.log("error");
    }
  };
  getCurrentLocation();