## Required structure

### PositiveIntegerOrZero
	PositiveIntegerOrZero(ushort | int) //constructor, throw Exception if int < 0
	Value : ushort | int //property
	ToString() : String => "9999" (value) // method

### Patient //Codificar desordenes utilizando operaciones de bits
	Patient(name: String, lastName: String) //constructor
	Name : String
	LastName: String
	Disorders: String[] // (disorders as string array { "Programmer", "Tester", "Bipolar", ...  })
	IsHealthy: boolean // (true: zero disorders, false: at least one disorder)
	AddDisorder(disorderCode : ushort | short) : boolean // true : added (was not found), false : already has it
	HasDisorder(disorderCode : ushort | short) : boolean // true: has it, false : does not has it
	ToString() : "{name} {lastName} has {disorders}"; {disorders} => "disorderA, disorderB, disorderC, ..."

### PatientList | IPatientList //interface
	Size : PositiveIntegerOrZero // Property
	Add(newPatient: Patient) : boolean //true : no estaba | false : estaba presente no se agrega
	Contains(somePatient: Patient) : boolean
	Remove(somePatient: Patient) : boolean //true : estaba | false : no estaba
	All() : Patient[]

### v1) PatientArrayList : IPatientList (java) implements PatientList //Array based
		PatientArrayList() // constructor

### v2) PatientLinkedList : PatientList | IPatientList //Linked List Based
		PatientLinkedList() // constructor
