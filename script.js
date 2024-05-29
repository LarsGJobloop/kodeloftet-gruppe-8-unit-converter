function logToConsole() {
    console.log("Input changed")
}

// Hent ut alle elementer med klasse navn "input-element"
const inputElements = document.getElementsByClassName("input-element")

// For løkker ->  For hvert element i samlingen inputElements gjør logikken i kodeblokken
for (const input of inputElements) {
    input.addEventListener("input", logToConsole)
}
