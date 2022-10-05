const car = (manufacturer_, model_, optional_) => {
    objectOfCar = {
        manufacturer: manufacturer_,
        model: model_,
    }

    const key = Object.keys(optional_);
    const values = Object.values(optional_);

    for (let i = 0; i < Object.keys(optional_).length; i++) {
        let objkey = key[i]
        let objValue = values[i]

        objectOfCar[objkey] = objValue
    }

    return objectOfCar
}


const firstObj = car('Toyota', '1992', {color: 'red', height: "250ft"})
console.log(firstObj)

const secondObj = car('Toyota', '1992', {color: 'red', height: "250ft", wheel: 4, silencer: true})
console.log(secondObj)
