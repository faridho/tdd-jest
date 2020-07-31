const fullName = new Promise((resolve, reject) => {
    const firstName = "faridho"
    const lastName = "faridho"

    if (firstName === lastName) {
        resolve("you are right")
    }

    reject("you are wrong")
}).then(succesMsg => {
    return succesMsg
}, errMsg => {
    return errMsg
})

module.exports = fullName