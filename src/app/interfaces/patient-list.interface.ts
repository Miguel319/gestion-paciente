import { Patient } from '../model/patient.class';
import { PositiveIntegerOrZero } from '../model/positive-integer-or-zero.class';

export interface PatienList {
  // Size : PositiveIntegerOrZero // Property
  size: PositiveIntegerOrZero;

  add: (newPatient: Patient) => boolean;

  contains: (somePatient: Patient) => boolean;

  remove: (somePatient: Patient) => boolean;

  all: () => Patient[];
}
