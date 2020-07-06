let toDo = [];

function getReply(command) {
    const commandWords = command.split(' ');
  if (command.startsWith("hello my name ")) {
    const name = commandWords[commandWords.length - 1];
    return " Nice to meet you " + name;
  } else if (command.startsWith("What is my name")) {
    return " Your name is Maher";
  } else if (command.startsWith("Add")) {
    const activity = commandWords[1];
    
    if(toDo.includes(activity))
    {
      return activity  + " allready exist"
    }
    else{
        toDo.push(activity);
        return activity + " added to your todo";
    }
    
  }
   else if (command.startsWith("Remove")) {
    const activity = commandWords[1];
    const remo = toDo.indexOf(activity);
    if(remo > -1 ){
      toDo.splice(remo,1);
    }
    return activity + " removed from your todo";
  }
  else if(command.startsWith("What is on my todo?"))
  {
      if (toDo.length == 0) {
        return "there is no thing to do ";
      } else {
        return "you have " + toDo.length + " todos " + '"' + toDo + '"';
      }
  }
  else if(command === 'what day is it today?')
  {
     return new Date().toLocaleDateString("en-US", {
       day: "numeric",
       year: "numeric",
       month: "long",
     });
  }

  else if (command.startsWith ("what is")) {
    const commandWords = command.split(' ');
    console.log(commandWords);
    let num1 = commandWords[commandWords.length - 3] ;
    let num2 = commandWords[commandWords.length - 1];
         return parseInt(num1) + parseInt(num2);
       }
      
       else if( command.startsWith('set a timer for ')){
          const commandWords = command.split(" ");
          let time = parseInt(commandWords[commandWords.length - 2]);
          setTimeout(function () {
            console.log("timer is done");
          }, time);
          return "timer set for " + time  +" min";
          
       }
       else {
         return "the command is not found"
       }
 
}


console.log(getReply("set a timer for 5 min"));


 
