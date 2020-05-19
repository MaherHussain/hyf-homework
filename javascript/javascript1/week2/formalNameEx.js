//codepen link 
//https://codepen.io/MaherHussain/pen/bGVQKqm
  
// Copy your getFullname function here
function getFullname (firstname, lastname, useFormalName ){
if(useFormalName == true){
   console.log( firstname, lastname );

return "Lord " + firstname +" " + lastname;
   
   }
  else
  {
      console.log( firstname, lastname );

return  firstname + " " + lastname;
  }
const firstnameInput = document.querySelector('main input.firstname');
const lastnameInput = document.querySelector('main input.lastname');
const useFormalNameInput = document.querySelector('main input[name="use-formal-name"]');
const boardingcardButton = document.querySelector("main button");
const boardingcard = document.querySelector("main div.boardingcard");
const fullnameElement = document.querySelector("main div.boardingcard .fullname");

boardingcardButton.addEventListener("click", () => {
    const firstname = firstnameInput.value;
    const lastname = lastnameInput.value;
    const useFormalName = useFormalNameInput.checked;
    
    const fullname = getFullname(firstname, lastname, useFormalName);
    
    fullnameElement.innerHTML = fullname;
    boardingcard.classList.remove('hidden');
});