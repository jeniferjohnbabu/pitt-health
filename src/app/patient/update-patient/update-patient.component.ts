import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PatientModel } from 'src/app/shared/patient.model';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css']
})
export class UpdatePatientComponent implements OnInit {

  public patientForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<UpdatePatientComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PatientModel
  ) { }

  ngOnInit() {
    this.patientForm = new FormGroup({
      firstName: new FormControl(this.data.firstName),
      lastName: new FormControl(this.data.lastName),
      visits: new FormControl(this.data.visits),
      age: new FormControl(this.data.age),
      pcp: new FormControl(this.data.pcp),
      insurance: new FormControl(this.data.insurance),
      payment: new FormControl(this.data.insurance)
    });
  }
  savePatientDetail(formData: any) {
    this.dialogRef.close(formData);
    console.log(formData);
  }

}
