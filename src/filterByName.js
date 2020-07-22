function filterByName(inputArr, searchTerm) {
    if(!searchTerm) throw Error("search canot be empty")
    if(!inputArr.length) throw Error("inputArr cannot be empty")
    
    return inputArr.filter((arrayElement) => {
       return arrayElement.name == searchTerm 
    })
}
module.exports = filterByName