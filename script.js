// Hent ut alle elementer med klasse navn "input-element"
const inputElements = document.getElementsByClassName("input-element")

function logToConsole(event) {
    // Hent ut verdien i input feltet
    const value = event.target.value
    // Hent ut enheten fra input feltet
    const unit = event.target.id

    // Regn ut de nye verdien
    const centimeter = convertFromTo(unit, "centimeter", value)
    const meter = convertFromTo(unit, "meter", value)
    const inch = convertFromTo(unit, "inch", value)
    const feet = convertFromTo(unit, "feet", value)

    // For hvert felt oppdater til den nye verdien
    for (const input of inputElements) {
        switch (input.id) {
            case "centimeter":
                input.value = centimeter
                break;
            case "meter":
                input.value = meter
                break;
            case "inch":
                input.value = inch
                break;
            case "feet":
                input.value = feet
                break;
        }
    }
}

function convertFromTo(from, to, value) {
    let result = 0

    // From value
    switch (from) {
        case "meter":
            // To value
            switch (to) {
                case "meter":
                    result = value
                    break;
                case "centimeter":
                    result = value * 100
                    break;
                case "inch":
                    result = value * 39.37007874015748031496062992126
                    break;
                case "feet":
                    result = value * 3.2808398950131233595800524934383
                    break;
            }
            break;
        case "centimeter":
            // To value
            switch (to) {
                case "meter":
                    result = value
                    break;
                case "centimeter":
                    result = value * 100
                    break;
                case "inch":
                    result = value * 39.37007874015748031496062992126
                    break;
                case "feet":
                    result = value * 3.2808398950131233595800524934383
                    break;
            }
            break;
    }

    return result
}

// For løkker ->  For hvert element i samlingen inputElements gjør logikken i kodeblokken
for (const input of inputElements) {
    input.addEventListener("input", logToConsole)
}
