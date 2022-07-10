const Plane = require('./Plane');

class ExperimentalPlane   extends Plane {

    constructor(model, maxSpeed, maxFlightDistance, maxLoadCapacity, type, classificationLevel)  {
        super(model, maxSpeed, maxFlightDistance, maxLoadCapacity);
        this.type = type;
        this.classificationLevel = classificationLevel;
    }

    get model() {
        return this.model;
    }

    set model(model) {
        this.model = model;
    }

    get maxSpeed() {
        return this.maxSpeed;
    }

    set maxSpeed(maxSpeed) {
        this.maxSpeed = maxSpeed;
    }

    get maxFlightDistance() {
        return this.maxFlightDistance;
    }

    set maxFlightDistance(maxFlightDistance) {
        this.maxFlightDistance = maxFlightDistance;
    }

    get maxLoadCapacity() {
        return this.maxLoadCapacity;
    }

    set maxLoadCapacity(maxLoadCapacity) {
        this.maxLoadCapacity = maxLoadCapacity;
    }

    get type() {
        return this.type;
    }

    set type(type) {
        this.type = type;
    }

    get classificationLevel() {
        return this.classificationLevel;
    }

    set classificationLevel(classificationLevel) {
        this.classificationLevel = classificationLevel;
    }
}

module.exports = ExperimentalPlane