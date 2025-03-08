function generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {

    const lower = 'abcdefghijklmnopqrstuvwxyz'
    const upper = lower.toUpperCase();
    const numChars = '0123456789'
    const symChars = '!@#$%^&*()_+-='

    let allowedChars = ''
    let password = ''

    allowedChars += includeLowercase ? lower : "";
    allowedChars += includeUppercase ? upper : "";
    allowedChars += includeNumbers ? numChars : "";
    allowedChars += includeSymbols ? symChars : "";

    if (passwordLength <= 0) {
        return `(password lengrh must be at least 1)`;
    }
    if (allowedChars.length === 0) {
        return `(at least 1 set of carachters needs to be selected)`;
    }

    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}



const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLength, 
                                  includeLowercase, 
                                  includeUppercase, 
                                  includeNumbers, 
                                  includeSymbols);
                            
console.log(password)

document.getElementById("password").textContent = password