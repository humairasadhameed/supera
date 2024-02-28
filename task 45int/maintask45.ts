function createCar(manufacturer: string, model: string, color: string, feature: string): object {
    let carInfo: object = {
        manufacturer: manufacturer,
        model: model,
        color: color,
        feature: feature
    };
    if (feature) {
        carInfo['feature'] = feature;
    }

    return carInfo;
}
let myCar = createCar("Toyota", "Civic", "Mid-orange","GPS");
console.log(myCar);
