// alert("Hello world")
// prompt("Hi This is banana")

// var userName = prompt("Hi give your name.")
// alert("My name is "+ userName )


var textArea = document.querySelector("#text-input");

var button = document.querySelector("#btn");

var output = document.querySelector("#output")

function clickEvent(){
   output.innerText = "shdjshfjshfise "+ textArea.value;
   }

 button.addEventListener("click", clickEvent); //  callback function


