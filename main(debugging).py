# By Hoccyy
import time ; startTime = time.time()

MorseAlphabet = {"a": " .- ", "b": "  -... ", "c": " -.-. ", "d": " -.. ", "e": " . ", "f": " ..-. ", "g": " --. ", "h": " .... ", "i": " .. ", "j": " .--- ", "k": " -.- ", "l": " .-.. ", "m": " -- ", "n": " -. ", "o": " --- ", "p": " .--. ", "q": " --.- ", "r": " .-. ", "s": " ... ", "t": " - ", "u": " ..- ", "v": " ...- ", "w": " .-- ", "x": " -..- ", "y": " -.-- ", "z": " --.. ", "1": " .---- ", "2": " ..--- ", "3": " ...-- ", "4": " ....- ", "5": " ..... ", "6": " -.... ", "7": " --... ", "8": " ---.. ", "9": " ----. ", "0": " ----- ", ".": " .-.-.- ", ",": " --..-- ", "?": " ..--.. ", "!": " ..--. ", ":": " ---... ", "\"": " .-..-. ", "\'": " .----. ", "=": " -...- "}

# Main processing below
englishWords = input("Enter some words : "); print("\n"); englishWords.replace(" ", "") ; letterPos = 0 ; morseCodeTranslation = ""

for i in range(len(englishWords)):
    morseCodeTranslation += MorseAlphabet[ (englishWords[letterPos]) ]
    letterPos += 1
print (morseCodeTranslation)

endTime = time.time() ; print(endTime - startTime)