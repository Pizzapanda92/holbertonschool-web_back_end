export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get name() {
    return this._name
  }

  set name(name) {
    if (typeof code === 'string') this._code = code;
  }

  get code() {
    return this._code
  }

  set code(code) {
    if (typeof code === 'string') this._code = code;
  }


  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
