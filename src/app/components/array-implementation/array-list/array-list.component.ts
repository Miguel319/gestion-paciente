import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/model/patient.class';
import { Router } from '@angular/router';
import { PatientListService } from 'src/app/services/patient-list.service';
import Swal from 'sweetalert2';

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

  add(patient: Patient): void {
    this.patientListService.add(patient);
    this.size = this.patientListService.size.getValue();
  }


  async addDisorder(patient: Patient) {
    const { value } = await Swal.fire({
      title: `Has disorder

      Input the disorder code`,
      input: 'text',
      inputPlaceholder: 'Disorder code in decimal: e.g: '
    });

    const toNum: number = Number(value);
    const isValid = Number.isInteger(toNum) && toNum >= 0;

    if (!isValid) {
      Swal.fire({
        title: 'Error: you must input a positive integer.',
        showClass: {
          popup: 'animated fadeInDown faster'
        },
        hideClass: {
          popup: 'animated fadeOutUp faster'
        }
      });
    } else {
      patient.addDisorder(toNum);
    }
  }

  async hasDisorder(patient: Patient) {
    const { value } = await Swal.fire({
      title: `Has disorder

      Input the disorder code`,
      input: 'text',
      inputPlaceholder: 'Disorder code in decimal: e.g: '
    });

    const toNum: number = Number(value);
    const isValid = Number.isInteger(toNum) && toNum >= 0;

    if (!isValid) {
      Swal.fire({
        title: 'Error: you must input a positive integer.',
        showClass: {
          popup: 'animated fadeInDown faster'
        },
        hideClass: {
          popup: 'animated fadeOutUp faster'
        }
      });
    } else {
      const hasIt = patient.hasDisorder(toNum);

      Swal.fire({
        title: hasIt
          ? `True: ${patient.getName()} ${patient.getLastName()} has the outlined disorders.`
          : `False: ${patient.getName()} ${patient.getLastName()} doesn't have the outlined disorders.`,
        showClass: {
          popup: 'animated fadeInDown faster'
        },
        hideClass: {
          popup: 'animated fadeOutUp faster'
        }
      });
    }
  }

  remove(patient: Patient): void {
    this.patientListService.remove(patient);
    this.size = this.patientListService.size.getValue();
  }

   contains() {
    this.router.navigateByUrl('contains-array-list')
  }

  getDisorders(patient: Patient): string[] {
    return patient.getDisorders();
  }
}
