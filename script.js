// Et kart over forholdenen mellom basen og de andre verdiene
const conversionMap = {
    "meter": 1, // Base enhet
    "centimeter": 0.01,
    "feet": 3.2808399,
    "inch": 39.3700787,
}

// Hent ut alle elementer med klasse navn "input-element"
const inputElements = document.getElementsByClassName("input-element")

function updateFields(event) {
    // Hent ut enheten fra input feltet
    const inUnit = event.target.id
    // Hent ut verdien i input feltet
    const value = event.target.value

    // For hvert felt oppdater til den nye verdien
    for (const input of inputElements) {
        const outUnit = input.id
        // Regn ut de nye verdien, avrund
        input.value = convert(inUnit, outUnit, value).toFixed(2)
    }
}

/**
 * Konverterer en verdi fra et format til et annet
 * @param {keyof conversionMap} from 
 * @param {keyof conversionMap} to 
 * @param {number} value 
 */
function convert(from, to, value) {
    const baseUnit = value / conversionMap[from]
    const result = baseUnit * conversionMap[to]
    return result
}

// For løkker ->  For hvert element i samlingen inputElements legg til en hendelses lytter
for (const input of inputElements) {
    input.addEventListener("input", updateFields)
}
