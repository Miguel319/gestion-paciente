import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Patient } from 'src/app/model/patient.class';
import { PatientLinkedListService } from '../../../services/patient-linked-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-linked',
  templateUrl: './edit-linked.component.html',
  styleUrls: ['./edit-linked.component.css']
})
export class EditLinkedComponent implements OnInit {
  formGroup: FormGroup;
  patient: Patient;
  exists: boolean;
  errMessage: string;

  constructor(
    private fb: FormBuilder,
    private patientLinkedListService: PatientLinkedListService,
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

      this.exists = this.patientLinkedListService.add(this.patient);

      if (!this.exists) {
        this.router.navigateByUrl('linked-list');
        this.patient = null;
      } else {
        this.errMessage = 'This user already exists!';
      }
    }
  }

}
