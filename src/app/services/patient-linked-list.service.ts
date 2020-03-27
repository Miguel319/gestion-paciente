import { Injectable } from '@angular/core';
import { LinkedList } from '../model/linked-list.class';
import { PositiveIntegerOrZero } from '../model/positive-integer-or-zero.class';
import { Patient } from '../model/patient.class';

@Injectable({
  providedIn: 'root'
})
export class PatientLinkedListService {
  patients: LinkedList;
  size: PositiveIntegerOrZero;

  constructor() {
    this.patients = new LinkedList();
  }

  add(newPatient: Patient): boolean {
    let patientSearch = 0;

    if (this.patients.size > 0) {
      for (let i = 0; i < this.patients.size; i++) {
        if (
          this.patients.getAt(i).getName() === newPatient.getName() &&
          this.patients.getAt(i).getLastName() === newPatient.getLastName()
        ) {
          patientSearch++;
          break;
        }
      }
    }

    if (!patientSearch) this.size.setValue(this.patients.size);

    return patientSearch ? true : false;
  }

  contains(somePatient: Patient): boolean {
    let patientSearch = 0;

    if (this.patients.size > 0) {
      for (let i = 0; i < this.patients.size; i++) {
        if (
          this.patients.getAt(i).getName() === somePatient.getName() &&
          this.patients.getAt(i).getLastName() === somePatient.getLastName()
        ) {
          patientSearch++;
          break;
        }
      }
    }

    return patientSearch ? true : false;
  }

  /* remove(somePatient: Patient): boolean {


    this.patients.removeAt(this.patients.removeAt(this.patients.));

    this.size.setValue(this.size.getValue() - 1);

    return this.patientList.indexOf(somePatient) >= 0;
  }*/

  all(): LinkedList {
    return this.patients;
  }
}
