//By Hoccyy
var morseAlphabet = {" ": "\/", "a": " .- ", "b": "  -... ", "c": " -.-. ", "d": " -.. ", "e": " . ", "f": " ..-. ", "g": " --. ", "h": " .... ", "i": " .. ", "j": " .--- ", "k": " -.- ", "l": " .-.. ", "m": " -- ", "n": " -. ", "o": " --- ", "p": " .--. ", "q": " --.- ", "r": " .-. ", "s": " ... ", "t": " - ", "u": " ..- ", "v": " ...- ", "w": " .-- ", "x": " -..- ", "y": " -.-- ", "z": " --.. ", "1": " .---- ", "2": " ..--- ", "3": " ...-- ", "4": " ....- ", "5": " ..... ", "6": " -.... ", "7": " --... ", "8": " ---.. ", "9": " ----. ", "0": " ----- ", ".": " .-.-.- ", ",": " --..-- ", "?": " ..--.. ", "!": " ..--. ", ":": " ---... ", "\"": " .-..-. ", "\'": " .----. ", "=": " -...- "};
var morseAlphabet2 = {"----": "0", "/": " ", ".----": "1", "..---": "2", "...--": "3", "....-":"4", ".....":"5", "-....":"6", "--...":"7","---..": "8", "----.": "9", ".-": "a", "-...":"b", "-.-.":"c", "-..": "d", ".":"e", "..-.":"f", "--.":"g", "....":"h", "..":"i", ".---": "j", "-.-": "k", ".-..":"l", "--":"m", "-.":"n", "---":"o", ".--.":"p", "--.-":"q", ".-.":"r", "...":"s", "-": "t", "..-": "u", "...-": "v", ".--": "w", "-..-":"x", "-.--":"y", "--..":"z", ".-.-.-": ".", "--..--":",", "..--..":"?", "..--.":"!", "---...":":", ".-..-.": '"', ".----.":"\'", "-...-": "="};

var translateButton = document.getElementById("buttonSetTranslate");
var boxSelection = true; // true is eng -> Morse and false is opposite
//Text boxes
var engTextBox = document.getElementById("englishTextBox"); var morseTextBox = document.getElementById("morseTextBox");
//
function translationFunction() {
    var engText = document.getElementById("englishTextBox").value;
    engText = engText.toLowerCase(); //Debug common letter conversion - alert(engText);
    let textSize = engText.length;

    if (engText != ""){ //Checks if empty

    function translationCleaning(){
        //morseTranslation = morseTranslation.replace("  ", "");
        morseTranslation = morseTranslation.replaceAll("undefined", "");
        morseTranslation = morseTranslation.trim();
        morseTranslation = morseTranslation.replaceAll("  ", " ");
    }

    if (boxSelection) {
        var morseTranslation;
        let tempSizeVar = 0;
        
        for (textSize; tempSizeVar < textSize; tempSizeVar++){
            morseTranslation += morseAlphabet[engText[tempSizeVar]];
        }

        translationCleaning();
        morseTextBox.value = morseTranslation;
        //alert(morseTranslation);
    }
    //Debugging - alert(engText);
}
}

translateButton.addEventListener("click", translationFunction);