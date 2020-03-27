import { Component, OnInit, OnChanges } from '@angular/core';
import { PatientLinkedListService } from '../../../services/patient-linked-list.service';
import { Patient } from 'src/app/model/patient.class';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-linked',
  templateUrl: './list-linked.component.html',
  styleUrls: ['./list-linked.component.css']
})
export class ListLinkedComponent implements OnInit {
  patientList;
  size: number;

  constructor(
    private patientLinkedListService: PatientLinkedListService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.patientList = this.patientLinkedListService.all();
    this.size = this.patientLinkedListService.size.getValue();
  }

  add(patient: Patient): void {
    this.patientLinkedListService.add(patient);
    this.size = this.patientLinkedListService.size.getValue();
  }

  remove(patient: Patient): void {
    this.patientLinkedListService.remove(patient);
    this.size = this.patientLinkedListService.size.getValue();

    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigateByUrl('linked-list');
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

  contains(): void {
    this.router.navigateByUrl(`contains-linked-list`);
  }

  getDisorders(patient: Patient): string[] {
    return patient.getDisorders();
  }
}
