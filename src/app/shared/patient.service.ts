import { Injectable } from '@angular/core';
import { PatientModel } from './patient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {


  constructor() { }

  patientColumnDefs = [
    {headerName: 'First Name', field: 'firstName', sortable: true, filter: true},
    {headerName: 'Last Name', field: 'lastName', sortable: true, filter: true},
    {headerName: 'Visits', field: 'visits', sortable: true, filter: true},
    {headerName: 'Age', field: 'age', sortable: true, filter: true},
    {headerName: 'Physician', field: 'pcp', sortable: true, filter: true},
    {headerName: 'Insurance', field: 'insurance', sortable: true, filter: true},
    // {headerName: 'Action', field: 'action', cellRenderer: 'customActionRenderer'}
  ];

  refreshPatients = new Subject<PatientModel[]>();

  // patientColumnDefs = ['firstName', 'lastName', 'visits', 'age', 'pcp', 'insurance', 'payment', 'action'];

  patientData = [
    new PatientModel('John', 'Babu', 2, 36, 'Andrew', 'uhc', 0),
    new PatientModel('Jessin', 'Babu', 4, 7, 'Aeron', 'aetna', 0),
    new PatientModel('Jannis', 'Babu', 6, 5, 'Antony', 'cigna', 0),
    new PatientModel('Jenifer', 'Babu', 5, 33, 'Elyse', 'BlueCross', 0),
    new PatientModel('Sadeesh', 'Ramakrishnan', 2, 38, 'Gerald', 'Aetna', 0),
    new PatientModel('Anita', 'Ramakrishnan', 8, 35, 'Micheal', 'uhc', 0),
    new PatientModel('Prithvi', 'Ramakrishnan', 3, 4, 'Connie', 'Cigna', 0),
    new PatientModel('Ram', 'MM', 7, 33, 'andrew', 'bluecross', 0),
    new PatientModel('Santhiya', 'MM', 8, 28, 'Antony', 'uhc', 0),
    new PatientModel('Madhav', 'MM', 3, 5, 'Gerald', 'Cigna', 0),
    new PatientModel('Mithran', 'MM', 10, 1, 'Aeron', 'Aetna', 0)
  ];

  getAllPatients() {
    return this.patientData;
  }

  updatePatientList(updatedPatient: any) {
    this.patientData = this.patientData.map(patient => {
      if (patient.firstName === updatedPatient.firstName) {
        return updatedPatient;
      } else {
        return patient;
      }
    });
    this.refreshPatients.next(this.patientData);
    console.log(this.patientData);
  }

  addDoctorList(newPatient: any) {
   this.patientData.push(newPatient);
   this.refreshPatients.next(this.patientData);
  }

  removeFromPatientList(selectedPatient: PatientModel) {
    this.patientData = this.patientData.filter(patient => patient.firstName !== selectedPatient.firstName);
    this.refreshPatients.next(this.patientData);
  }

}
