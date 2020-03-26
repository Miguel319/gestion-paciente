export class Pacient{
    name: string;
    lastname: string;
    disorders: string[];
    IsHealthy: boolean;
    
    constructor(name: string, lastName: string){
        this.name = name;
        this.lastname = lastName;
    }

    addDisorder(disorderCode: number): boolean{
        return true;
    }

    hasDisorder(disorderCode: number): boolean {
        return false;
    }

    toString(){

        return `${this.name} ${this.lastname} has ${this.disorders}`;
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

*/