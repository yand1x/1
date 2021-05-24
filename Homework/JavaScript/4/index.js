function createNewUser() {
    let firstName = prompt("Введите имя")
    let lastName = prompt("Введите фамилию")
    
    let newUser = {
        firstName: firstName,
        lastName: lastName,
        method: function getLogin() {
            return firstName[0].toLowerCase() + lastName.toLowerCase()
        }
    };

    return newUser
}

let user = createNewUser()
console.log(user.method())