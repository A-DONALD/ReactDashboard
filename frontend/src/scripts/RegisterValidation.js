function validation(values) {

    let error = {}
    const name_pattern = /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,}$/
    // pattern => xxx@xxx.xxx
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    // length > 8; min 1 uppercase; min 1 lowercase; min 1 digit; no other character allowed
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if (values.firstname === "") {
        error.firstname = "Prenom vide"
    }
    else if (!name_pattern.test(values.firstname)) {
        error.firstname = "Prenom invalide"
    } else {
        error.firstname = ""
    }

    if (values.name === "") {
        error.name = "Nom vide"
    }
    else if (!name_pattern.test(values.name)) {
        error.name = "Nom invalide"
    } else {
        error.name = ""
    }

    if (values.email === "") {
        error.email = "Email vide"
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