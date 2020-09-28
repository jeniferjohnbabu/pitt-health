import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PatientModel } from 'src/app/shared/patient.model';
import { PatientService } from 'src/app/shared/patient.service';
import { MatDialog } from '@angular/material/dialog';
import { ViewPatientComponent } from '../view-patient/view-patient.component';
import { UpdatePatientComponent } from '../update-patient/update-patient.component';
import { AddPatientComponent } from '../add-patient/add-patient.component';
import { DeletePatientComponent } from '../delete-patient/delete-patient.component';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  displayedColumnDefs = [];
  dataSource = new MatTableDataSource<PatientModel>();
  constructor(private patientService: PatientService,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.displayedColumnDefs = this.patientService.patientColumnDefs;
    this.dataSource.data = this.patientService.getAllPatients();
    this.patientService.refreshPatients.subscribe(patients => {
      this.dataSource.data = patients;
      console.log(patients);
    });
  }

  onViewPatient(selectedPatient: PatientModel) {
    const dialogRef = this.dialog.open(ViewPatientComponent, {
      height: '80%',
      width: '80%',
      data: selectedPatient
    });
  }

  onEditPatient(selectedPatient: PatientModel) {
    const editDialogRef = this.dialog.open(UpdatePatientComponent, {
      height: '400px',
      width: '600px',
      data: selectedPatient
    });
    editDialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.patientService.updatePatientList(result);
    });
  }

  onAddPatient() {
    const addDialogRef = this.dialog.open(AddPatientComponent, {
      height: '80%',
      width: '80%'
    });
    addDialogRef.afterClosed().subscribe(result => {
      this.patientService.addDoctorList(result);
    });
  }

  onRemovePatient(selectedPatient: PatientModel) {
    const removeDialogRef = this.dialog.open(DeletePatientComponent, {
      height: '400px',
      width: '600px',
      data: selectedPatient
    });
  }


}
