import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DoctorModel } from 'src/app/shared/doctor.model';
import { DoctorService } from 'src/app/shared/doctor.service';

@Component({
  selector: 'app-view-doctor',
  templateUrl: './view-doctor.component.html',
  styleUrls: ['./view-doctor.component.css']
})
export class ViewDoctorComponent implements OnInit {
  viewDoctor: any;
  constructor(
    public dialogRef: MatDialogRef<ViewDoctorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public doctorService: DoctorService) { }

    onNoClick(): void {
      this.dialogRef.close();
    }

  ngOnInit() {
    this.doctorService.getDoctorById(this.data.doctorId).subscribe(responseData => {
      this.viewDoctor = responseData;
    });
    // this.viewDoctor = this.data.rowData.doctorId;
    // return this.params = this.doctorService.onViewItemClick(DoctorModel);
  }
}