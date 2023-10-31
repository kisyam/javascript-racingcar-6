class Car {
  /** @type {string} */
  #carName;

  /** @type {number} */
  #distance;

  /**
   * @param {string} carName
   */
  constructor(carName) {
    this.#carName = carName;
    this.#distance = 0;
  }

  getCarName() {
    return this.#carName;
  }

  getCarDistance() {
    return this.#distance;
  }
}

export default Car;
