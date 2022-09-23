//By Hoccyy
var MorseAlphabet = {"a": " .- ", "b": "  -... ", "c": " -.-. ", "d": " -.. ", "e": " . ", "f": " ..-. ", "g": " --. ", "h": " .... ", "i": " .. ", "j": " .--- ", "k": " -.- ", "l": " .-.. ", "m": " -- ", "n": " -. ", "o": " --- ", "p": " .--. ", "q": " --.- ", "r": " .-. ", "s": " ... ", "t": " - ", "u": " ..- ", "v": " ...- ", "w": " .-- ", "x": " -..- ", "y": " -.-- ", "z": " --.. ", "1": " .---- ", "2": " ..--- ", "3": " ...-- ", "4": " ....- ", "5": " ..... ", "6": " -.... ", "7": " --... ", "8": " ---.. ", "9": " ----. ", "0": " ----- ", ".": " .-.-.- ", ",": " --..-- ", "?": " ..--.. ", "!": " ..--. ", ":": " ---... ", "\"": " .-..-. ", "\'": " .----. ", "=": " -...- "};

var translateButton = document.getElementById("buttonSetTranslate");
//Text boxes
var engTextBox = document.getElementById("englishTextBox"); var morseTextBox = document.getElementById("morseTextBox");
//
function translationFunction() {
    var engText = document.getElementById("englishTextBox").value;
    
    //Debugging - alert(engText);
}

translateButton.addEventListener("click", translationFunction);

engTextBox.addEventListener("click", function engTextBoxClicked() {alert("dawg")});
morseTextBox.addEventListener("click", function morseTextBoxClicked() {alert("doobie MORSE")});