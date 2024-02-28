function createCar(manufacturer, model, color, feature) {
    var carInfo = {
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
var myCar = createCar("Toyota", "Civic", "Mid-orange", "GPS");
console.log(myCar);
