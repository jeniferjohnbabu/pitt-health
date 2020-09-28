import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PatientService } from 'src/app/shared/patient.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AddDoctorComponent } from 'src/app/doctor/add-doctor/add-doctor.component';
import { PatientModel } from 'src/app/shared/patient.model';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {
  isLinear = false;
  addPatient: PatientModel;
  public newPatientForm: FormGroup;
  constructor(private patientService: PatientService,
              public dialogRef: MatDialogRef<AddDoctorComponent>,
              @Inject(MAT_DIALOG_DATA) public data: PatientModel) { }

  ngOnInit() {
      this.newPatientForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      visits: new FormControl(0),
      age: new FormControl(0),
      pcp: new FormControl(''),
      insurance: new FormControl(''),
      payment: new FormControl(0)
      });
  }

  onNewPatient(newPatient: any) {
    this.addPatient = new PatientModel(
      newPatient.firstName,
      newPatient.lastName,
      newPatient.visits,
      newPatient.age,
      newPatient.pcp,
      newPatient.insurance,
      newPatient.payment
    );
    this.dialogRef.close(this.addPatient);
  }

}
