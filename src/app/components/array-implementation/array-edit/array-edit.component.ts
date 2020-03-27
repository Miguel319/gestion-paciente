import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PatientListService } from '../../../services/patient-list.service';
import { Router } from '@angular/router';
import { Patient } from 'src/app/model/patient.class';

@Component({
  selector: 'app-array-edit',
  templateUrl: './array-edit.component.html',
  styleUrls: ['./array-edit.component.css']
})
export class ArrayEditComponent implements OnInit {
  formGroup: FormGroup;
  patient: Patient;
  exists: boolean;
  errMessage: string;

  constructor(
    private fb: FormBuilder,
    private patientListService: PatientListService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.patient = null;
    this.createForm();
  }

  createForm(): void {
    this.formGroup = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required]
    });
  }

  addPatient() {
    if (this.formGroup.valid) {
      this.patient = new Patient(
        this.formGroup.get('name').value,
        this.formGroup.get('lastName').value
      );

      this.exists = this.patientListService.add(this.patient);

      if (!this.exists) {
        this.router.navigateByUrl('array-list');
        this.patient = null;
      } else {
        this.errMessage = 'This user already exists!';
      }
    }
  }
}
