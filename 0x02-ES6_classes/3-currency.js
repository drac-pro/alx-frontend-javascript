export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(value) {
    this._code = value;
  }

  get name() {
    return this._name;
  }

  set name(vale) {
    this._name = vale;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
