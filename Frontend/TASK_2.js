var image = {
    width: 100,
    height: 400,
    title: 'Cool image'
};

function multiplyNumeric(image) {
    for (let key in image) {
        // console.log(typeof(image[key]))
        if (typeof(image[key]) == "number") {
            image[key] = image[key]*2
        }
    }
    return image
}

console.log(multiplyNumeric(image))