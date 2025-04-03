function generatePassword(length, includeLowercase, includeUpperrcase, includeSymbols, includeNumbers){
    const lowercasechars = "abcdefghijklmnopqrstuvwxyz";
    const upperrcasechars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";
    const numbers = "0123456789";

    let charset = "";
    let password = "";

    charset += includeLowercase ? lowercasechars : "";
    charset += includeUpperrcase ? upperrcasechars : "";
    charset += includeSymbols ? symbols : "";
    charset += includeNumbers ? numbers : "";

    if(charset.length === 0){
        return "Please select at least one set of characters.";

    }
    if(length <= 0){
        return "Password length must be greater than 0.";
    }
    for(let i = 0; i<length; i++){
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];

    }
    return password;

}

const passwordLength =12;
const includeLowercase = true;
const includeUpperrcase = true;
const includeSymbols = true;
const includeNumbers = true;

const password = generatePassword(passwordLength, 
                                  includeLowercase, 
                                  includeUpperrcase, 
                                  includeSymbols, 
                                  includeNumbers);
console.log(`Generated password: ${password}`);

