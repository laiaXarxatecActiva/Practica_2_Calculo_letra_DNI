const GUIVEN_FULL_DNI = prompt ("Dame el DNI, número y letra incluídos:");
const LETTERS = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

const letter_DNI = GUIVEN_FULL_DNI.slice(-1);
const number_DNI = GUIVEN_FULL_DNI.slice(0, -1);

let good_letter = 'T';

if (number_DNI.length !== 8 || isNaN(Number(number_DNI))) {
    console.error(`El DNI intruducido no tiene un formato correcto.\nReinicie la página para intentarlo de nuevo`);
} else {
    const good_number = Number(number_DNI);
    const resto_DNI = good_number%23;
    for (let i = 0; i < LETTERS.length; i++) {
        if (LETTERS.indexOf(LETTERS[i]) == resto_DNI) good_letter = LETTERS[i];         
    }


    if (good_letter === letter_DNI) {
        console.log("El número de la letra del DNI es correcta");
    } else {
        console.log("No");
        
    }
}


