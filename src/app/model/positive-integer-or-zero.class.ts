export class PositiveIntegerOrZero {
  private value: number;

  constructor(val: number) {
    if (val < 0 || !Number.isInteger(val))
      throw 'Sólo se permiten ceros o enteros positivos.';

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

/*
PositiveIntegerOrZero
    PositiveIntegerOrZero(ushort | int) //constructor, throw Exception if int < 0
    Value : ushort | int //property
    ToString() : String => "9999" (value) // method
    */
