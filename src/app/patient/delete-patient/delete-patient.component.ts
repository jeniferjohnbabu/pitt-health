import { Component, OnInit, Inject } from '@angular/core';
import { PatientService } from 'src/app/shared/patient.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-patient',
  templateUrl: './delete-patient.component.html',
  styleUrls: ['./delete-patient.component.css']
})
export class DeletePatientComponent implements OnInit {

  constructor(private patientService: PatientService,
              public dialogRef: MatDialogRef<DeletePatientComponent>,
              @Inject(MAT_DIALOG_DATA) public data: PatientService
  ) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onDeletePatient(data) {
    this.patientService.removeFromPatientList(data);
  }

}
