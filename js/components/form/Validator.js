class Validator {
    isValidName(name) {
        if (typeof name !== 'string' ||
        name === '' ||
        name.trim() === '') {
            return 'Vardas negali buti tuscias tekstas.';

        }
        return true;
    }

    isValidEmail(email) {
        if (typeof email !== 'string' ||
        email === '' ||
        email.trim() === '') {
            return 'Email negali buti tuscias tekstas.';

        }
        return true;
    }

    isValidText(text) {
        if (typeof text !== 'string' ||
        text === '' ||
        text.trim() === '') {
            return 'Text negali buti tuscias tekstas.';

        }
        return true;
    }

}

export { Validator }