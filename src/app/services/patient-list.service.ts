import { Injectable } from '@angular/core';
import { PatienList } from '../interfaces/patient-list.interface';
import { Patient } from '../model/patient.class';
import { PositiveIntegerOrZero } from '../model/positive-integer-or-zero.class';

@Injectable({
  providedIn: 'root',
})
export class PatientListService implements PatienList {
  patientList: Patient[];
  size: PositiveIntegerOrZero;

  constructor() {
    this.patientList = [];
    this.size = new PositiveIntegerOrZero(0);
  }

  add(newPatient: Patient): boolean {
    let patientExists: boolean = this.contains(newPatient);

    if (!patientExists) {
      this.patientList.push(newPatient);
      this.size.setValue(this.size.getValue() + 1);
    }

    return patientExists;
  }

  contains(somePatient: Patient): boolean {
    let patientExists: boolean = false;

    if (this.patientList.length > 0) {
      for (let elem of this.patientList) {
        patientExists = elem.equals(somePatient);

        if (patientExists) break;
      }
    }

    return patientExists;
  }

  remove(somePatient: Patient): boolean {
    this.patientList.splice(this.patientList.indexOf(somePatient), 1);

    this.size.setValue(this.size.getValue() - 1);

    return this.patientList.indexOf(somePatient) >= 0;
  }

  all(): Patient[] {
    return this.patientList;
  }
}
