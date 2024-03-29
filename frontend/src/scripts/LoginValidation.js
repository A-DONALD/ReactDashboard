function validation(values) {

    let error = {}
    // pattern => xxx@xxx.xxx
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    // length > 8; min 1 uppercase; min 1 lowercase; min 1 digit; no other character allowed
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if (values.email === "") {
        error.email = "l'email vide"
    }
    else if (!email_pattern.test(values.email)) {
        error.email = "Email invalide"
    } else {
        error.email = ""
    }

    if (values.password === "") {
        error.password = "Mot de passe vide"
    }
    else if (!password_pattern.test(values.password)) {
        error.password = "Mot de passe invalide"
    } else {
        error.password = ""
    }
    return error;
}

export default validation;