function stockAvailable(products) {
    if(products.length > 3) {
        return true
    }

    return false
}

function minimumStock(products) {
    if(products.length === 4) {
        return true
    }

    return false
}

module.exports = { stockAvailable, minimumStock }