const url =
  "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json";

// fetcing bad rating movies
  fetch(url)
  .then(respons => respons.json())
  .then((movie) => {
    for(let item of movie ){
      if (item.rating < 5 ){
        //console.log(item);

      } 
      
    }
    

  } )
  .catch((error) => {
    console.error("there is some thing wrong")
  })

  // fetcing bad rating movies since year 2000
  fetch(url)
  .then(respons => respons.json())
  .then((movie) => {
    for(let item of movie ){
      if (item.rating < 5 && item.year > 2000) {
        //console.log(item);
      } 
    }
    

  } )
  .catch((error) => {
    console.error("there is some thing wrong")
  })