import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DoctorModel } from 'src/app/shared/doctor.model';
import { DoctorService } from 'src/app/shared/doctor.service';

@Component({
  selector: 'app-delete-doctor',
  templateUrl: './delete-doctor.component.html',
  styleUrls: ['./delete-doctor.component.css']
})
export class DeleteDoctorComponent implements OnInit {

  deletedDoctor: any;
  constructor(private doctorService: DoctorService,
              public dialogRef: MatDialogRef<DeleteDoctorComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onDeleteDoctor() {
    this.doctorService.deleteDoctorById(this.data.rowData.doctorId).subscribe(responseData => {
      this.deletedDoctor = responseData;
      this.dialogRef.close();
    });
  }

  ngOnInit() {

  }

}
