import { Component, OnInit } from '@angular/core';
import { PatientListService } from '../../../services/patient-list.service';
import { Patient } from 'src/app/model/patient.class';
import Swal from 'sweetalert2';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contains-array-list',
  templateUrl: './contains-array-list.component.html',
  styleUrls: ['./contains-array-list.component.css']
})
export class ContainsArrayListComponent implements OnInit {
  name: string;
  lastName: string;
  formGroup: FormGroup;

  constructor(
    private patientListService: PatientListService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.formGroup = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required]
    });
  }

  contains() {
    if (this.formGroup.valid) {
      const newPatient: Patient = new Patient(
        this.formGroup.get('name').value,
        this.formGroup.get('lastName').value
      );

      let isContained: boolean = this.patientListService.contains(newPatient);

      if (isContained) {
        Swal.fire({
          title: `Yes: ${newPatient.getName()} ${newPatient.getLastName()} is on our records`,
          showClass: {
            popup: 'animated fadeInDown faster'
          },
          hideClass: {
            popup: 'animated fadeOutUp faster'
          }
        });

        setTimeout(() => this.router.navigateByUrl('array-list'), 3000);
      } else {
        Swal.fire({
          title: `No: the user you're looking for is not on our records`,
          showClass: {
            popup: 'animated fadeInDown faster'
          },
          hideClass: {
            popup: 'animated fadeOutUp faster'
          }
        });
        setTimeout(() => this.router.navigateByUrl('array-list'), 3000);
      }
    }

    this.router.navigateByUrl('array-list');
  }
}
