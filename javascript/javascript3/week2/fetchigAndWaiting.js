setTimeout(() => {
  fetch("https://swapi.dev/api/people")
    .then((response) => response.json())
    .then((data) => {
      for (let item of data.results) {
        console.log(item.name);
      }
    })
    .catch((error) => console.log("error"));
}, 3000);





async function fetchingAfterWating() {
  let respons = await fetch("https://swapi.dev/api/people");
  let data = await respons.json();
  return data;
}
setTimeout(() => {
  fetchingAfterWating().then((data) => {
    for (let item of data.results) {
      console.log(item.name);
    }
  });
}, 3000);
