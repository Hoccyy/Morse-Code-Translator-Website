//By Hoccyy
var morseAlphabet = {" ": "\/", "a": " .- ", "b": "  -... ", "c": " -.-. ", "d": " -.. ", "e": " . ", "f": " ..-. ", "g": " --. ", "h": " .... ", "i": " .. ", "j": " .--- ", "k": " -.- ", "l": " .-.. ", "m": " -- ", "n": " -. ", "o": " --- ", "p": " .--. ", "q": " --.- ", "r": " .-. ", "s": " ... ", "t": " - ", "u": " ..- ", "v": " ...- ", "w": " .-- ", "x": " -..- ", "y": " -.-- ", "z": " --.. ", "1": " .---- ", "2": " ..--- ", "3": " ...-- ", "4": " ....- ", "5": " ..... ", "6": " -.... ", "7": " --... ", "8": " ---.. ", "9": " ----. ", "0": " ----- ", ".": " .-.-.- ", ",": " --..-- ", "?": " ..--.. ", "!": " ..--. ", ":": " ---... ", "\"": " .-..-. ", "\'": " .----. ", "=": " -...- "};
var morseAlphabet2 = {"----": "0", "/": " ", ".----": "1", "..---": "2", "...--": "3", "....-":"4", ".....":"5", "-....":"6", "--...":"7","---..": "8", "----.": "9", ".-": "a", "-...":"b", "-.-.":"c", "-..": "d", ".":"e", "..-.":"f", "--.":"g", "....":"h", "..":"i", ".---": "j", "-.-": "k", ".-..":"l", "--":"m", "-.":"n", "---":"o", ".--.":"p", "--.-":"q", ".-.":"r", "...":"s", "-": "t", "..-": "u", "...-": "v", ".--": "w", "-..-":"x", "-.--":"y", "--..":"z", ".-.-.-": ".", "--..--":",", "..--..":"?", "..--.":"!", "---...":":", ".-..-.": '"', ".----.":"\'", "-...-": "="};

var translateButton = document.getElementById("buttonSetTranslate");
var boxSelection = true; // true is eng -> Morse and false is opposite
var buttonDiv = document.getElementById("button-Frame");
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
        morseTranslation = morseTranslation.replaceAll("NaN", "");
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
var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;

// TOGGLE
var toggleButton = document.getElementById("secondBG");
var modeValue = false;
var backVar = document.getElementById("mainBackg");
var title1 = document.getElementById("titleWord1");
var title2 = document.getElementById("titleWord2");
var arrow = document.getElementById("arrow");
var buttonsText = document.getElementById("buttonText");
var buttonsText2 = document.getElementById("buttonText2");


function toggleFunctions(){
    switch (modeValue){
        case false: // Dark Mode
            toggleButton.style = "animation: toggleMode1 1.1s ease-in; left:52%;";
            modeValue = true;

            backVar.style = "animation: colorTransition1 1.1s ease-in; background-color: #2B2B2B;";
            title1.style = "animation: textColorTransition1 1.1s ease-in; color: #fff;";
            title2.style = "animation: textColorTransition1 1.1s ease-in; color: #fff;";
            arrow.src="images/arrowDarkMode1.png";
            morseTextBox.style = "animation: textBox1 ease-in; color: #fff;";
            buttonsText.style = "animation: textColorTransition1 1.1s ease-in; color: #fff;";
            buttonsText2.style = "animation: textColorTransition1 1.1s ease-in; color: #fff;";
            //document.getElementById("mainBackground").style = "animation: colorTransition1 1.1s ease-in; background-color: #2B2B2B;";
            break;

        case true: // Light Mode
            toggleButton.style = "animation: toggleMode2 1.1s ease-in; left: 3%;";
            modeValue = false;
            backVar.style = "animation: colorTransition2 1.1s ease-in; background-color: rgb(218, 218, 218);";
            title1.style = "animation: textColorTransition2 1.1s ease-in; color: #000;";
            title2.style = "animation: textColorTransition2 1.1s ease-in; color: #000;";
            arrow.src="images/arrow.png";
            morseTextBox.style = "animation: textBox2 ease-in; color: grey;";
            buttonsText.style = "animation: textColorTransition2 1.1s ease-in; color: #000;";
            buttonsText2.style = "animation: textColorTransition2 1.1s ease-in; color: #000;";

            //document.getElementByClass("mainBackground").style = "animation: colorTransition2 1.1s ease-in; background-color: #fff;";
            break;
    }
}

toggleButton.addEventListener("click", toggleFunctions)
// TOGGLE


//Copy to clipboard
var copy1 = document.getElementById("copyToClip1"); var copy2 = document.getElementById("copyToClip2");

function copyToclipboard(){
    navigator.clipboard.writeText(morseTextBox.value);
}

copy1.addEventListener("click", copyToclipboard); copy2.addEventListener("click", copyToclipboard);
// 

// Download
var x = 1;
function download(data, filename, type) {
    var file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        }, 0); 
    }x++;
}
downloadButton = document.getElementById("buttonText");

function downloadFinal(){
    if ((morseTextBox.value).length > 0){ // While = death
        download(morseTextBox.value, "morseTranslation_" + x, "txt");
    }
}
downloadButton.addEventListener("click", downloadFinal);
// D.



  
  //Main sector
translateButton.addEventListener("click", translationFunction);



//alert(windowHeight);

if (windowHeight > 700){
    buttonDiv.style=("animation: resizeButtonMargin 2s ease-in; margin:10% 0% 0% 0%; text-align:center;");
}
