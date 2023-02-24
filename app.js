// alert("Hello world")
// prompt("Hi This is banana")

// var userName = prompt("Hi give your name.")
// alert("My name is "+ userName )

var textArea = document.querySelector("#text-input");

var button = document.querySelector("#btn");

var output = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json"; // This API takes 5 request per hour

function getTranslationURL(text) {
  return serverURL + "?"+ "text=" + text;
}

function errorHandling(error) {
  console.log("Error occure " + error);
  alert("Server is not responding........Wait for sometime.");
}

function clickEvent() {
  //    output.innerText = "shdjshfjshfise "+ textArea.value;

  //taking input
  var inputText = textArea.value;

  // calling server // processing done on server
  fetch(getTranslationURL(inputText))
    .then(response => response.json())
    // .then((value) => console.log(value.contents.translated))
    .then(jsonResponse => {
        var jsonRes= jsonResponse.contents.translated;
        output.innerText = jsonRes;
    })
    .catch(errorHandling); // catch error here
}

button.addEventListener("click", clickEvent); //  callback function
