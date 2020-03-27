import { Injectable } from '@angular/core';
import { PositiveIntegerOrZero } from '../model/positive-integer-or-zero.class';
import { Patient } from '../model/patient.class';
import { LinkedList } from '../model/linked-list.class';

@Injectable({
  providedIn: 'root'
})
export class PatientLinkedListService {
  patients: LinkedList<Patient>;
  size: PositiveIntegerOrZero;

  constructor() {
    this.patients = new LinkedList<Patient>();
    this.size = new PositiveIntegerOrZero(0);
  }

  add(newPatient: Patient): boolean {
    let patientSearch: number = 0;
    this.patients.append(newPatient);

    for (let patient of this.patients.toArray()) {
      if (
        patient.getLastName() === newPatient.getName() &&
        patient.getLastName() === newPatient.getLastName()
      ) {
        patientSearch++;
        break;
      }
    }

    if (!patientSearch) {
      this.size.setValue(this.size.getValue() + 1);
      console.log(this.size);
    }

    return patientSearch ? true : false;
  }

  contains(somePatient: Patient): boolean {
    let patientSearch: number = 0;

    if (this.size.getValue() > 0) {
      for (let patient of this.patients.toArray()) {
        if (
          patient.getName() === somePatient.getName() &&
          patient.getLastName() === somePatient.getLastName()
        ) {
          patientSearch++;
          break;
        }
      }

    }
    return patientSearch ? true : false;
  }

  remove(somePatient: Patient): boolean {
    const exists: boolean = Boolean(
      this.patients.toArray().find(v => v === somePatient)
    );

    if (exists) {
      this.patients.delete(somePatient);
      this.size.setValue(this.size.getValue() - 1);
    }
    return exists;
  }

  all() {
    return this.patients.toArray();
  }
}
