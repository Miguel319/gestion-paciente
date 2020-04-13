import { disordersStr } from '../util/disorders';

export class Patient {
  private name: string;
  private lastName: string;
  private disorders: number;
  private isHealthy: boolean;

  constructor(name: string, lastName: string) {
    this.name = name;
    this.lastName = lastName;
    this.disorders = 0;
    this.isHealthy = true;
  }

  moveBit = (n: number, bit: number) => n | (1 << (bit - 1));

  setName = (name: string): void => {
    this.name = name;
  };

  getName = () => this.name;

  setLastName = (lastName: string): void => {
    this.lastName = lastName;
  };

  getLastName = (): string => this.lastName;

  getDisorders = (): string[] => {
    let disordersArr: string[] = [];

    for (let i = 0; i < disordersStr.length; i++) {
      let l = 1 << i;

      if ((this.disorders & l) !== 0) disordersArr.push(disordersStr[i]);
    }

    return disordersArr;
  };

  isPatientHealthy = (): boolean => {
    this.isHealthy = this.getDisorders().length === 0;
    return this.isHealthy;
  };

  addDisorder(disorderCode: number): boolean {
    let hasDisorder: boolean = this.hasDisorder(disorderCode);
    // this.disorders.push(...this.tempDisorders);

    let disorder = this.moveBit(this.disorders, disorderCode);

    if (disorder != this.disorders) return hasDisorder;
  }

  hasDisorder(disorderCode: number): boolean {
    let disorder = this.moveBit(this.disorders, disorderCode);

    return disorder !== this.disorders;
  }

  equals(somePatient: Patient): boolean {
    return (
      this.getName() === somePatient.getName() &&
      this.getLastName() === somePatient.getLastName()
    );
  }

  toString(): string {
    return `${this.name} ${this.lastName} has ${this.disorders}`;
  }
}
