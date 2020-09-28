import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DoctorModel } from 'src/app/shared/doctor.model';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { DoctorService } from 'src/app/shared/doctor.service';

@Component({
  selector: 'app-update-doctor',
  templateUrl: './update-doctor.component.html',
  styleUrls: ['./update-doctor.component.css']
})
export class UpdateDoctorComponent implements OnInit {
  public doctorForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<UpdateDoctorComponent>,
    public doctorService: DoctorService,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.doctorForm = this.formBuilder.group({
      doctorId:  [{value: '', disabled: false }],
      firstName: [{value: '', disabled: false }],
      lastName:  [{value: '', disabled: false }],
      rating:  [{value: '', disabled: false }],
      age: [{value: '', disabled: false}],
      experience:  [{value: '', disabled: false }],
      insurance:  [{value: '', disabled: false }],
      availability: [{value: '', disabled: false}]
    });
    this.doctorService.getDoctorById(this.data.rowData.doctorId).subscribe(responseData => {
      this.doctorForm.patchValue({
        doctorId: responseData['doctorId'],
        firstName: responseData['firstName'],
        lastName: responseData['lastName'],
        rating: responseData['rating'],
        age: responseData['age'],
        experience: responseData['experience'],
        insurance: responseData['insurance'],
        availability: responseData['availability']
      });
    });
  }
  saveDoctorDetail(formData: any) {
    const doc = new DoctorModel(
      formData.firstName,
      formData.lastName,
      formData.rating,
      formData.age,
      formData.experience,
      formData.insurance,
      formData.availability,
      formData.doctorId
    );
    this.doctorService.updateDoctorById(this.data.rowData.doctorId, doc).subscribe(responseData => {
      this.dialogRef.close();
    });
  }
  closeEditDoctor() {
    this.dialogRef.close();
  }

}
