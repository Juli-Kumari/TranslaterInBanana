// alert("Hello world")
// prompt("Hi This is banana")

// var userName = prompt("Hi give your name.")
// alert("My name is "+ userName )


var textArea = document.querySelector("#text-input");

var button = document.querySelector("#btn");

function clickEvent(){
    console.log("Clicked!");
    console.log(textArea.value);
   }
   
 button.addEventListener("click", clickEvent); //  callback function


