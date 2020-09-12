let classMates = ["1620prabn", "AnilMula", "Deepti-Dk"];
let requests = classMates.map((name) =>
  fetch(`https://api.github.com/search/repositories?q=user:${name}`)
);


Promise.all(requests)
.then((responses) => {
   
   
  return Promise.all(responses.map((response) => response.json()) );

 
})
.then((data) => {

 let mainUl = document.createElement("ul");
 document.body.appendChild(mainUl);
 
 
   
  

   data.forEach((element) => {
        let nameli = document.createElement("li");
        mainUl.appendChild(nameli);
        nameli.innerHTML = element.items[0].owner.login;

        let reposUl = document.createElement("ul");
        nameli.appendChild(reposUl);
        element.items.forEach((repo) => {
            let repoLi = document.createElement("ol");
            repoLi.innerHTML = `repo name: ${repo.name} Url: ${repo.html_url} `;
            reposUl.appendChild(repoLi);
        });
     
   });



   
}).catch ((error) =>{
    console.error(error);
})
 