const danishWords = ["plante" ,"bil" , "kaffe", "bog", "øl", "planetarium","p"];
function shortestWord(){
   console.log(
  danishWords.reduce((a,b) => a.length <= b.length? a:b));
    
}

shortestWord();