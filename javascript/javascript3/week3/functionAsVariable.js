

// array with three function elements 
let funArray = [
    
    function  ()  {
      console.log("fun1");
    }, 
    function (){
        console.log("fun2")
    },
    function (){
        console.log("fun3")
    },
];
 
funArray.forEach(function (func) {
    func();
    
});

// function types. 
const constFunc = () => {
    console.log(" function declared as variable");

}

function normalFunc(){
    console.log("normal function");
}

constFunc();
normalFunc();

// object 

let funcObject ={
    "func" : function () {
        
        console.log(" function inside object ")
    }
}
funcObject.func();