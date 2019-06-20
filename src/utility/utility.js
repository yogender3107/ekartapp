//Helper functions are defined here
export const updateProductDetail = (product_details, attributeSelection, product_variations) => {
    let storageId, colorId;
    if (attributeSelection) {
        storageId = attributeSelection.storageSelection;
        colorId = attributeSelection.colorSelection;
    }
    for (let element of product_variations) {
        if (element.sign.indexOf(storageId) !== -1 && element.sign.indexOf(colorId) !== -1) {
            product_details = { ...product_details, ...element };
        }
    }
    return product_details;
}

//Attribute Helper function
export const getAttributeID = (attributes, type) => {
    for (let att of attributes) {
        if (att.name === type) {
            return att._id;
        }
        if (att.name === type) {
            return att._id;
        }
    }
}