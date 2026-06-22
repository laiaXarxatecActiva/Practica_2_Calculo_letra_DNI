const AMOUNT_LETTERS = 23;
const TREATED_DNI = askDNI();

if (!isValidFormat(TREATED_DNI)) {
    giveErrorMessage();
} else {
    const calculated_DNI_letter = calculateLetter(TREATED_DNI);
    const letter_DNI = (TREATED_DNI.slice(-1)).toUpperCase();
    const number_DNI = TREATED_DNI.slice(0, -1);
    const resto_DNI = (parseInt(number_DNI)) % AMOUNT_LETTERS;
    let message = "El número y la letra del DNI son correctos.";

    if (calculated_DNI_letter !== letter_DNI) message = "El número del DNI es correcto, pero la letra no es correspondiente.\nLa letra correspondiente sería ${calculated_DNI_letter}.";

    console.log(`DNI: ${number_DNI}   .   Letra indicada: ${letter_DNI}\nResto de la división: ${resto_DNI}\nLetra calculada: ${calculated_DNI_letter}\n${message}`);
}

/* FUNCTIONS */

function askDNI() {
    const GIVEN_DNI = prompt ("Dame el DNI, número y letra incluídos:");
    return normalizeDNI(GIVEN_DNI);
}

function normalizeDNI(DNI) {
    if (typeof DNI !== "string" || DNI.trim().length !== 9 || DNI.trim().length !== 10) return "";
    return DNI.trim().replace('-', '').replace('_', '').replace(' ', '');
}

function isValidFormat(DNI) {
    const number = DNI.slice(0, -1);
    const LETTERS = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    return (LETTERS.includes((DNI.slice(-1)).toUpperCase()) && DNI && DNI.length === 9 && number.length===8 && !isNaN(parseInt(number)));
}

function calculateLetter(DNI) {
    const LETTERS = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    let number=parseInt(DNI.slice(0, -1));
    return LETTERS[number % AMOUNT_LETTERS];
}

function giveErrorMessage() {
    console.error(`El DNI intruducido no tiene un formato correcto.\n
    Ejemplos de Formatos aceptados:\n
        - 99999999X
        - 99999999 X
        - 99999999-X
        - 99999999_X\n
    Reinicie la página para intentarlo de nuevo`);
}