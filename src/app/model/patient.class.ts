import { disordersStr } from '../util/disorders';

export class Patient {
  private name: string;
  private lastName: string;
  private disorders: string[];
  private isHealthy: boolean;
  private tempDisorders: string[];

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
    let hasDisorder: boolean = this.hasDisorder(disorderCode);
    this.disorders.push(...this.tempDisorders);

    return hasDisorder;
  }

  hasDisorder(disorderCode: number): boolean {
    this.tempDisorders = [];
    let hasDisorder: boolean = false;

    for (let x = 0; x < 16; x++) {
      let shift = 1 << x;

      if ((disorderCode & shift) > 0) {
        this.tempDisorders.push(disordersStr[x]);
      }
    }

    for (let element of this.disorders) {
      hasDisorder = this.tempDisorders.indexOf(element) >= 0;

      if (hasDisorder)
        this.tempDisorders.splice(this.tempDisorders.indexOf(element), 1);
    }
    return hasDisorder;
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
