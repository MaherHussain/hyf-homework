let toDoList = [];



function getReply(command) {
    let name;
    const commandWords = command.split(" ");
  if (command.startsWith("hello my name ")) {
   name = commandWords[commandWords.length - 1];
    return " Nice to meet you " + name;
  } else if (command.startsWith("What is my name")) {
    name = "Ahmad";
    return " Your name is "+ name ;
  } else if (command.startsWith("Add") && command.endsWith("to my todo")) {
    const activity = command.replace("Add", "").replace("to my todo","");
    
    if (toDoList.includes(activity)) {
      return activity + " allready exist";
    } else {
      toDoList.push(activity);
      return activity + "added to your todo";
    }
    
  }
   else if (command.startsWith("Remove") && command.endsWith("from my todo")) {
    const activity = command.replace("Remove", "").replace("from my todo","");
    const todo = toDoList.indexOf(activity);
    if (todo > -1) {
      toDoList.splice(todo, 1);
    }
    return activity + " removed from your todo";
  }
  else if(command.startsWith("What is on my todo?"))
  {
      if (toDoList.length == 0) {
        return "there is no thing to do ";
      } else {
        return "you have " + toDoList.length + " todos " + '"' + toDoList + '"';
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
    
    
    let num1 =parseInt(commandWords[2])  ;
    let num2 = parseInt(commandWords[4]);
    let  operation = commandWords[3];
    if(num1 && num2){
      switch (operation) {
        
        case "+":
          return num1 + num2;
        case "-":
          return num1 - num2;
        case "*":
          return num1 * num2;
        case "/":
          return num1 / num2;
          default:
            return 'there is no operation';
      }
    }
         
       }
      
       else if( command.startsWith('set a timer for ')){
          const commandWords = command.split(" ");
          let seconds = parseInt(commandWords[4]);
          setTimeout(function () {
            console.log("timer is done");
          }, seconds* 1000);
          return "timer set for " + seconds + " seconds";
          
       }
       else {
         return "the command is not found"
       }
 
}


console.log(getReply("set a timer for 4 seconds"));
// console.log(getReply("Remove clean the car from my todo"));

 console.log(toDoList);
