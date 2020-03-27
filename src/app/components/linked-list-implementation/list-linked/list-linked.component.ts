import { Component, OnInit } from '@angular/core';
import { PatientLinkedListService } from '../../../services/patient-linked-list.service';
import { Patient } from 'src/app/model/patient.class';
import { LinkedList } from '../../../model/linked-list.class';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-linked',
  templateUrl: './list-linked.component.html',
  styleUrls: ['./list-linked.component.css']
})
export class ListLinkedComponent implements OnInit {
  patientList: LinkedList;
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
  }

  remove(patient: Patient): void {
    // this.patientLinkedListService.remove(patient);
  }

  contains(): void {
    this.router.navigateByUrl(`array-formulario`);
  }

  getDisorders(patient: Patient): string[] {
    return patient.getDisorders();
  }

}
