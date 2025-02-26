let languageCode = prompt("Enter a language code (es, de, en, fr):");  //Enter the language code to use
let translation;                                                       //Initialize translation, which stores the translated "hello" based on language code
//The below if/else statement sets the value for translation based on the language code, with English being the default 
if (languageCode === "es") {                  
    translation = "Hola Mundo";
} else if (languageCode === "de") {
    translation = "Hallo Welt";
} else if (languageCode === "fr") {
    translation = "Bonjour le monde";
} else {
    translation = "Hello World";
}

console.log(`Hello World translated in ${languageCode === "es" ? "Spanish" : languageCode === "de" ? "German" : languageCode === "fr" ? "French" : "English"} is: ${translation}`);  //This shows the translation using the language code and the text that identifies the translation