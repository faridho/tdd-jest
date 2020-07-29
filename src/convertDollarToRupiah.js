function convertDollarToRupiah(num, callback){
    const result = num * 14000
    return callback(result)
}

module.exports = convertDollarToRupiah