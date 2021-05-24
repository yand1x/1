let name = prompt("Как вас зовут ?")
let age = prompt("Сколько вам лет ?")

if (age < 18) alert("You are not allowed to visit this website")
if (age >= 18 && age <= 22) {
    if (confirm("Are you sure you want to continue")) {
        alert(`Welcome, ${name}`)
    } else {
        alert('You are not allowed to visit this website')
    }
}

if (age > 22) alert(`Welcome, ${name}`)