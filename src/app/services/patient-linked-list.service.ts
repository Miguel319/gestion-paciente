import { Injectable } from '@angular/core';
import { PositiveIntegerOrZero } from '../model/positive-integer-or-zero.class';
import { Patient } from '../model/patient.class';
import { LinkedList } from '../model/linked-list.class';
import { PatienList } from '../interfaces/patient-list.interface';

@Injectable({
  providedIn: 'root',
})
export class PatientLinkedListService implements PatienList {
  patients: LinkedList<Patient>;
  size: PositiveIntegerOrZero;

  constructor() {
    this.patients = new LinkedList<Patient>();
    this.size = new PositiveIntegerOrZero(0);
  }

  add(newPatient: Patient): boolean {
    let patientExists: boolean = this.contains(newPatient);

    if (!patientExists) {
      this.size.setValue(this.size.getValue() + 1);
      this.patients.append(newPatient);
    }

    return patientExists;
  }

  contains(somePatient: Patient): boolean {
    let patientExists: boolean = false;

    if (this.size.getValue() > 0) {
      for (let patient of this.patients.toArray()) {
        patientExists = patient.equals(somePatient);

        if (patientExists) break;
      }
    }
    return patientExists;
  }

  remove(somePatient: Patient): boolean {
    const exists: boolean = Boolean(
      this.patients.toArray().find((v) => v === somePatient)
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
