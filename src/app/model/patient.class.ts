import { disordersStr } from '../util/disorders';

export class Patient {
  private name: string;
  private lastName: string;
  private disorders: string[];
  private isHealthy: boolean;

  constructor(name: string, lastName: string) {
    this.name = name;
    this.lastName = lastName;
    this.disorders = [];
    this.isHealthy = true;
  }

  setName = (name: string): void => {
    this.name = name;
  };

  getName = () => this.name;

  setLastName = (lastName: string): void => {
    this.lastName = lastName;
  };

  getLastName = (): string => this.lastName;

  getDisorders = (): string[] => this.disorders;

  isPatientHealthy = (): boolean => {
    this.isHealthy = this.disorders.length === 0;
    return this.isHealthy;
  };

  addDisorder(disorderCode: number): boolean {
    let temp = [];
    let hasDisorder: boolean = false;

    for (let x = 0; x < 16; x++) {
      let shift = 1 << x;

      if ((disorderCode & shift) > 0) {
        temp.push(disordersStr[x]);
      }
    }

    for (let element of this.disorders) {
      hasDisorder = temp.indexOf(element) >= 0;

      if (hasDisorder) temp.splice(temp.indexOf(element), 1);
    }

    this.disorders.push(...temp);

    return hasDisorder;
  }

  hasDisorder(disorderCode: number): boolean {
    let temp = [];
    let hasDisorder: boolean = false;

    for (let x = 0; x < 16; x++) {
      let shift = 1 << x;

      if ((disorderCode & shift) > 0) {
        temp.push(disordersStr[x]);
      }
    }

    for (let element of this.disorders) {
      hasDisorder = temp.indexOf(element) >= 0;

      if (hasDisorder) temp.splice(temp.indexOf(element), 1);
    }
    return hasDisorder;
  }

  toString(): string {
    return `${this.name} ${this.lastName} has ${this.disorders}`;
  }
}
