import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/model/patient.class';
import { Router } from '@angular/router';
import { PatientListService } from 'src/app/services/patient-list.service';
import { PositiveIntegerOrZero } from '../../../model/positive-integer-or-zero.class';

@Component({
  selector: 'app-array-list',
  templateUrl: './array-list.component.html',
  styleUrls: ['./array-list.component.css']
})
export class ArrayListComponent implements OnInit {
  patientList: Patient[];
  size: number;

  constructor(
    private patientListService: PatientListService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.patientList = this.patientListService.all();
    this.size = this.patientListService.size.getValue();
  }

  add(patient: Patient) {
    this.patientListService.add(patient);
  }

  remove(patient: Patient) {
    this.patientListService.remove(patient);
  }

  contains(): void {
    this.router.navigateByUrl(`array-formulario`);
  }

  getDisorders(patient: Patient) {
    return patient.getDisorders();
  }


}
