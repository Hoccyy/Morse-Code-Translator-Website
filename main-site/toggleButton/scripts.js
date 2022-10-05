var toggleButton = document.getElementById("secondBG");
var modeValue = false;

function toggleFunctions(){
    switch (modeValue){
        case false: 
            toggleButton.style = "animation: toggleMode1 1.1s ease-in; left:52%;";
            modeValue = true;
            document.getElementById("mainBody").style = "animation: colorTransition1 1.1s ease-in; background-color: #2B2B2B;";
            break;
        case true:
            toggleButton.style = "animation: toggleMode2 1.1s ease-in; left: 3%;";
            modeValue = false;
            document.getElementById("mainBody").style = "animation: colorTransition2 1.1s ease-in; background-color: #fff;";
            break;
    }
}

toggleButton.addEventListener("click", toggleFunctions)