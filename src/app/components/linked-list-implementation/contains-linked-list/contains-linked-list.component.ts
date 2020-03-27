import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PatientLinkedListService } from '../../../services/patient-linked-list.service';
import { Router } from '@angular/router';
import { Patient } from 'src/app/model/patient.class';

@Component({
  selector: 'app-contains-linked-list',
  templateUrl: './contains-linked-list.component.html',
  styleUrls: ['./contains-linked-list.component.css']
})
export class ContainsLinkedListComponent implements OnInit {
  name: string;
  lastName: string;
  formGroup: FormGroup;

  constructor(
    private patientLinkedListService: PatientLinkedListService,
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

      let isContained: boolean = this.patientLinkedListService.contains(
        newPatient
      );

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

        setTimeout(() => this.router.navigateByUrl('linked-list'), 3000);
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
        setTimeout(() => this.router.navigateByUrl('linked-list'), 3000);
      }
    }

    this.router.navigateByUrl('linked-list');
  }
}
