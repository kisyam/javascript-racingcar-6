import { Console } from '@woowacourse/mission-utils';
import Car from '../models/Car.js';
import Track from '../models/Track.js';
import DisplayView from '../views/DisplayView.js';
import { Messages } from '../constants/Messages.js';
import InputView from '../views/InputView.js';
class RaceController {
  /** @type {Track} */
  #race;

  /**  @type {number} */
  #round;

  async startLine() {
    const carNames = await InputView.inputCarNames();

    const cars = carNames.map((carName) => new Car(carName));

    this.#race = new Track(cars);

    this.#round = await InputView.inputRaceRounds();
  }

  async startRace() {
    Console.print('');

    Console.print('실행 결과');

    for (let i = 0; i < this.#round; i++) {
      await this.#race.moveCarsCheckCondition();

      DisplayView.printRaceState(this.#race.getCars());
    }
  }

  finishLine() {
    const champions = this.#race
      .getChampions()
      .map((car) => car.getCarName())
      .join(', ');

    Console.print(`최종 우승자 : ${champions}`);
  }
}

export default RaceController;
