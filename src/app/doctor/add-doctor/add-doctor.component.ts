import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { DoctorService } from 'src/app/shared/doctor.service';
import { DoctorModel } from 'src/app/shared/doctor.model';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DoctorListComponent } from '../doctor-list/doctor-list.component';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {
  isLinear = false;
  addDoctor: DoctorModel;
  public newDoctorForm: FormGroup;


  constructor(private doctorService: DoctorService,
              public dialogRef: MatDialogRef<DoctorListComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DoctorModel) { }


  ngOnInit() {
    this.newDoctorForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      rating: new FormControl(0),
      age: new FormControl(0),
      experience: new FormControl(0),
      insurance: new FormControl('')
    });
  }


  onNewDoctor(newDoctor: any) {
    this.addDoctor = new DoctorModel(
      newDoctor.firstName,
      newDoctor.lastName,
      +newDoctor.rating,
      +newDoctor.age,
      +newDoctor.experience,
      newDoctor.insurance,
      newDoctor.availability,
      +newDoctor.doctorId);
    this.doctorService.addDoctor(this.addDoctor).subscribe(responseData => {
      this.dialogRef.close();
    });
  }

}
