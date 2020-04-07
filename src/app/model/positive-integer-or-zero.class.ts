export class PositiveIntegerOrZero {
  private value: number;

  constructor(val: number) {
    const isValValid = !Number.isInteger(val) || val < 0;
    if (isValValid) throw 'Sólo se permiten ceros o enteros positivos.';

    this.value = val;
  }

  setValue(val: number): void {
    this.value = val;
  }

  getValue = () => this.value;

  toString(): string {
    return this.value.toString();
  }
}
