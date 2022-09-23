function print(x){console.log(x);}

var morseAlphabet2 = {"----": "0", "/": " ", ".----": "1", "..---": "2", "...--": "3", "....-":"4", ".....":"5", "-....":"6", "--...":"7","---..": "8", "----.": "9", ".-": "a", "-...":"b", "-.-.":"c", "-..": "d", ".":"e", "..-.":"f", "--.":"g", "....":"h", "..":"i", ".---": "j", "-.-": "k", ".-..":"l", "--":"m", "-.":"n", "---":"o", ".--.":"p", "--.-":"q", ".-.":"r", "...":"s", "-": "t", "..-": "u", "...-": "v", ".--": "w", "-..-":"x", "-.--":"y", "--..":"z", ".-.-.-": ".", "--..--":",", "..--..":"?", "..--.":"!", "---...":":", ".-..-.": '"', ".----.":"\'", "-...-": "="};

var bug = ".-.  ---  --  .--.  /  -..  ---  --.  ...";
var tempvar = 0;
var tempString =""; var morseEngTranslation;

function morseToEnglish(){
    var tempLetter;
    function letterGetter(){
        tempvar = 0; tempString = ""
        while (bug[tempvar] != " "){
            tempString += bug[tempvar];
            tempvar++;
            //print(tempString);
        }
        //tempLetter = tempString;
        morseEngTranslation += morseAlphabet2[tempString];
        
        bug = bug.replace(tempString, "");
    } // 
    letterGetter();
    letterGetter();
    letterGetter();
    
}

morseToEnglish();
print(bug);
print(morseEngTranslation);