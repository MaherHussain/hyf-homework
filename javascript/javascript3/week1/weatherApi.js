const cityName = document.querySelector("input");
const btn = document.getElementById("btn");
const result = document.getElementById("weatherstatus");

const empty = document.getElementById("empty");
btn.addEventListener ('click',() => {
     
     if (cityName.value === "" || cityName.value == null) {
       const empty = document.getElementById("empty");
       empty.innerHTML = " you have to input city name ";
       
      
     } else {
       empty.innerHTML = " ";
       let ApiUrl =
         "http://api.openweathermap.org/data/2.5/weather?q=" +
         cityName.value +
         "&APPID=06fa8fd89dcf2977c64d589ba3347949&units=metric";

       fetch(ApiUrl)
         .then((status) => status.json())
         .then((weather) => {
           let name = document.getElementById("name");
           let temp = document.getElementById("temp");
           let wind = document.getElementById("wind");
           let weatherstatus = document.getElementById("description");
           let icon = document.querySelector("#icon");

           name.innerHTML = weather.name + " " + weather.sys.country;

           temp.innerHTML = weather.main.temp + " &#xb0" + " C";

           wind.innerHTML = "wind speed " + weather.wind.speed + " km/h";

           weatherstatus.innerHTML = weather.weather[0].description;

           const iconUrl =
             "http://openweathermap.org/img/wn/" +
             weather.weather[0].icon +
             "@2x.png";
           icon.setAttribute("src", iconUrl);

           
         });
     }

})
