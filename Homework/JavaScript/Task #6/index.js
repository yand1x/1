function filterBy(array, type) {
    let exceptions = []

    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] != type) {
            exceptions.push(array[i])
        }
    }

    return exceptions
}

console.log(filterBy(['hello', 'world', 23, '23', null], 'string'))