import {Patient} from "../model/patient.class";

export interface PatienList{

   // Size : PositiveIntegerOrZero // Property

    add:(newPatient: Patient) => boolean;

    contains:(somePatient: Patient) => boolean;

    remove:(somePatient: Patient) => boolean;

    all: () => Patient[];

} 
