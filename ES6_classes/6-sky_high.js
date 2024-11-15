import Building from './5-building.js';

export default class SkyHighBuilding extends Building {
  Constructor(sqft, floors) {
    super(sqft);
    this.floors = floors;
  }

  get floors() {
    return this.floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
