import { Injectable } from '@angular/core';
import { PatienList } from '../interfaces/patient-list.interface';
import { Patient } from '../model/patient.class';
import { PositiveIntegerOrZero } from '../model/positive-integer-or-zero.class';

@Injectable({
  providedIn: 'root'
})
export class PatientListService implements PatienList {
  patientList: Patient[];
  size: PositiveIntegerOrZero;

  constructor() {
    this.patientList = [];
    this.size = new PositiveIntegerOrZero(0);
  }

  add(newPatient: Patient): boolean {
    let patientSearch = 0;

    if (this.patientList.length > 0) {
      for (let elem of this.patientList) {
        if (
          elem.getName() === newPatient.getName() &&
          elem.getLastName() === newPatient.getLastName()
        ) {
          patientSearch++;
          break;
        }
      }
    }

    if (!patientSearch) this.patientList.push(newPatient);

    this.size.setValue(this.size.getValue() + 1);

    return patientSearch ? true : false;
  }

  contains(somePatient: Patient): boolean {
    let patientSearch = 0;

    if (this.patientList.length > 0) {
      for (let elem of this.patientList) {
        if (
          elem.getName() === somePatient.getName() &&
          elem.getLastName() === somePatient.getLastName()
        ) {
          patientSearch++;
          break;
        }
      }
    }

    return patientSearch ? true : false;
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
