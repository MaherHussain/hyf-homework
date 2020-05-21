// the link of codepen is https://codepen.io/MaherHussain/pen/wvKRbpj


// copy your homework solution here to make the webpage work!
const class07Students = [];
function addStudentToClass(studentName) {
    let  result ;
    // You write code here
 if(studentName == "Queen"){
        
      class07Students.unshift(studentName);
        result = "welcome Queen Margrethe you have place between us ";

    }
    else if(class07Students.length >= 6 ){
        return fales; 
        result = "Cannot add more students to class 07";
      

    }
    else if(class07Students.includes(studentName)){
        
        result = "Student " + studentName + " is already in the class";
    }
    else if(studentName == " "){
         
         result = "write syudent name please";
    }
    
    else{
        class07Students.push(studentName);
        result = "student is added";

    }

    return alert (result);
}

function getNumberOfStudents() {
    
    // You write code here
    return class07Students.length;
}
