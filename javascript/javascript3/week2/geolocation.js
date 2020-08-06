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





  async function getCurrentLocation(position) {
     if (!navigator.geolocation) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        let url = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    try {
      await fetch(url);
      console.log(`Latitude: ${latitude} °, Longitude: ${longitude} °`);
    } catch (error) {
      console.log("error");
    }
        
    }
     
  };
  getCurrentLocation();
