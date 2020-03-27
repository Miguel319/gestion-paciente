export class Patient{
    private name: string;
    private lastName: string;
    private disorders: string[];
    private isHealthy: boolean;

    constructor(name: string, lastName: string){
        this.name = name;
        this.lastName = lastName;
        this.disorders = [];
        this.isHealthy = true;
    }

    setName = (name: string): void => {
      this.name = name;
    }

    getName = () => this.name;

    setLastName = (lastName: string): void => {
      this.lastName = lastName;
    }

    getLastName = (): string => this.lastName;

    getDisorders = (): string[] => this.disorders;

    isPatientHealthy = (): boolean => {
      this.isHealthy = this.disorders.length === 0;
      return this.isHealthy;
    }
    addDisorder(disorderCode: number): boolean{
        return true;
    }

    hasDisorder(disorderCode: number): boolean {
        return false;
    }

    toString(): string {
        return `${this.name} ${this.lastName} has ${this.disorders}`;
    }
}



/*
Patient //Codificar desordenes utilizando operaciones de bits
    Patient(name: String, lastName: String) //constructor
    Name : String
    LastName: String
    Disorders: String[] // (disorders as string array { "Programmer", "Tester", "Bipolar", ...  })
    IsHealthy: boolean // (true: zero disorders, false: at least one disorder)
    AddDisorder(disorderCode : ushort | short) : boolean // true : added (was not found), false : already has it
    HasDisorder(disorderCode : ushort | short) : boolean // true: has it, false : does not has it
    ToString() : "{name} {lastName} has {disorders}"; {disorders} => "disorderA, disorderB, disorderC, ..."

    PatientList | IPatientList //interface
    Size : PositiveIntegerOrZero // Property
    Add(newPatient: Patient) : boolean //true : no estaba | false : estaba presente no se agrega
    Contains(somePatient: Patient) : boolean
    Remove(somePatient: Patient) : boolean //true : estaba | false : no estaba
    All() : Patient[]

*/
