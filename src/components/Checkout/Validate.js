
export const validate = (valuesInput) => {
    if (valuesInput.name.length < 5) {
        alert("El nombre es demasiado corto")
        return false
    }
    if (valuesInput.email.length < 7) {
        alert("El email es inválido")
        return false
    }
    if (valuesInput.phone.length < 8) {
        alert("El teléfono es inválido")
        return false
    }

    return true
}