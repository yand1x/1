function createNewUser() {
    let firstName = prompt("Enter your name")
    let lastName = prompt("Please enter your last name")

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