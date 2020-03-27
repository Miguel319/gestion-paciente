import { Component, OnInit } from '@angular/core';
import { PatientListService } from '../../services/patient-list.service';
import { Patient } from '../../model/patient.class';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-array-implementation',
  templateUrl: './array-implementation.component.html',
  styleUrls: ['./array-implementation.component.css']
})
export class ArrayImplementationComponent implements OnInit {
  constructor() {

  }

  ngOnInit(): void {}
}
