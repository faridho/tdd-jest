# Test-Driven Development by JEST
📌 How to test sofware by JEST. It is a delightful JavaScript Testing Framework with a focus on simplicity - JEST Doc

## Project Setup

```
npm install
```

## Cases
First case is a how to test a function to filter by name
```
// src/filterByName.js

function filterByName(inputArr, searchTerm) {
    if(!searchTerm) throw Error("search canot be empty")
    if(!inputArr.length) throw Error("inputArr cannot be empty")
    
    return inputArr.filter((arrayElement) => {
       return arrayElement.name == searchTerm 
    })
}
module.exports = filterByName

// __test__/filterByName.spec.js

const guessOfTheName = require("../src/guessOfTheName")

describe("Promise Function", () => {
    test("It should return right name", () => {
        const output = "you are right"

        return guessOfTheName.then(result => {
            expect(result).toBe(output)
        })
    })
})
```
Second test is a how to test Callbacks function that convert US Dollar to Rupiah Indonesia
```
// src/convertDollarToRupiah.js

function convertDollarToRupiah(num, callback){
    const result = num * 14000
    return callback(result)
}

module.exports = convertDollarToRupiah

// __test__/convertDollarToRupiah.spec.js

const convertDollarToRupiah = require("../src/convertDollarToRupiah")

describe("Callback Function", () => {
    test("Test Convert Rupiah To Dollar", done => {
        const output = 140000
        convertDollarToRupiah(10, result => {
            expect(result).toBe(output)
            done()
        })
    })
})
```

Third test is a how test Promise that guess the name
```
// src/guessofTheName.js

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

// __test__/guessOfTheName.spec.js

const guessOfTheName = require("../src/guessOfTheName")

describe("Promise Function", () => {
    test("It should return right name", () => {
        const output = "you are right"

        return guessOfTheName.then(result => {
            expect(result).toBe(output)
        })
    })
})
```


## Run Test

```
npm jest
```

## Run Report Testing Coverage

```
npm test -- --coverage
```

## Tutorials

Kindly read:
👉 Instalation => https://medium.com/javascript-upgrade/test-driven-development-t-dd-dengan-jest-bagian-1-1c43b9c45dba
👉 Coverage => https://medium.com/javascript-upgrade/test-driven-development-t-dd-dengan-jest-coverage-6e251b1f4376
👉 Report HTML => https://medium.com/javascript-upgrade/test-driven-development-t-dd-dengan-jest-report-html-5a3378466fad
👉 Asynchronus => https://medium.com/javascript-upgrade/testing-asynchronus-code-dengan-jest-e21ea085c23c



