const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];
function shortestWord(){
   
    let shortestword = danishWords[0];
    for(let word in danishWords){
        
             if (word.length < shortestword.length) {
               shortestword = word;
             }

        return shortestword


    }
}
console.log(shortestWord());