import { Injectable } from '@angular/core';
import { DoctorModel } from './doctor.model';
import { Subject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ViewDoctorComponent } from '../doctor/view-doctor/view-doctor.component';
import { UpdateDoctorComponent } from '../doctor/update-doctor/update-doctor.component';
import { AddDoctorComponent } from '../doctor/add-doctor/add-doctor.component';
import { DeleteDoctorComponent } from '../doctor/delete-doctor/delete-doctor.component';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  imageMap = new Map();

  constructor(public dialog: MatDialog, public http: HttpClient) {
    this.imageMap.set('uhc', 'https://www.eplatinumhealth.com/wp-content/uploads/2019/09/uhc-icon.jpg'),
    this.imageMap.set('aetna', 'https://www.bettermedicarealliance.org/wp-content/uploads/2020/03/aetna.png'),
    this.imageMap.set('cigna', 'https://logoeps.com/wp-content/uploads/2011/06/cigna-logo-vector.png'),
    this.imageMap.set('bluecross', 'https://individual.icons-land.com/IconsPreview/POI/PNG/Circled/256x256/Hospital_Cross_Circle_Blue.png')
  }

  

  doctorColumnDefs = [
    {headerName: 'First Name', field: 'firstName', sortable: true, filter: true},
    {headerName: 'Last Name', field: 'lastName', sortable: true, filter: true},
    {headerName: 'Rating', field: 'rating', sortable: true, filter: true, cellRenderer: 'customRatingRenderer'},
    {headerName: 'Age', field: 'age', sortable: true, filter: true},
    {headerName: 'Experience', field: 'experience', sortable: true, filter: true},
    {headerName: 'Insurance', field: 'insurance', sortable: true, filter: true, cellRenderer: 'customInsuranceRenderer'},
    {headerName: 'Availability', field: 'availability', sortable: true, filter: true, cellRenderer: 'customAvailabilityRenderer'},
    {headerName: 'Action', field: 'action', width: 300,
        cellRenderer: 'customActionRenderer',
        cellRendererParams: {
          onViewClick: this.onViewItemClick.bind(this),
          onEditClick: this.onEditItemClick.bind(this),
          onDeleteClick: this.onDeleteItemClick.bind(this),
          onAddClick: this.onAddItemClick.bind(this),
        }}
  ];
  refreshDoctors = new Subject<any>();
  deleteDoctor = new Subject<DoctorModel>();
  editDoctor = new Subject<any>();

    AddDoc = [];

  // doctorColumnDefs = ['firstName', 'lastName', 'rating', 'age', 'experience', 'insurance', 'update'];
  doctorData = [
    new DoctorModel('Gregory', 'Lam', 5, 45, 10, 'uhc', true, 0),
    new DoctorModel('Aeron', 'Shaftel', 4, 51, 15, 'aetna', false, 0 ),
    new DoctorModel('Connie', 'Gowrich', 5, 55, 12, 'cigna', true, 0),
    new DoctorModel('Andrew', 'Jofrdon', 2, 43, 14, 'bluecross', true, 0),
    new DoctorModel('Antony', 'Phillips',  5, 50, 13, 'uhc', false, 0),
    new DoctorModel('Gerald', 'Arnett', 4, 49, 12, 'aetna', false, 0),
    new DoctorModel('Elyse', 'Schutle', 5, 46, 10, 'cigna', true, 0),
    new DoctorModel('Micheal', 'Cornett', 2, 43, 14, 'bluecross', true, 0)
  ];

  getAllDoctors() {
    return this.doctorData;
  }

  getDoctorsList() {
    return this.http.get('/api/v1/doctor');
  }

  getDoctorById(doctorId: number) {
    return this.http.get('/api/v1/doctor/' + doctorId);
  }

  deleteDoctorById(doctorId: number) {
    return this.http.delete('/api/v1/doctor/' + doctorId);
  }

  updateDoctorById(doctorId: number, doctor: DoctorModel) {
    return this.http.put('/api/v1/doctor/' + doctorId, doctor);
  }

  addDoctor(doctor: DoctorModel) {
    return this.http.post('/api/v1/doctor',  doctor);
  }

  // updateDoctorDetail(updatedDoctor: any) {
  //   this.doctorData = this.doctorData.map(doctor => {
  //     if (doctor.firstName === updatedDoctor.firstName) {
  //       return updatedDoctor;
  //     } else {
  //       return doctor;
  //     }
  //   });
  //   this.refreshDoctors.next(this.doctorData);
  // }

  // addNewDoctor(newDoctor: any) {
  //   this.doctorData.push(newDoctor);
  //   this.refreshDoctors.next(this.doctorData);
  // }

  // removeDoctor(data: DoctorModel) {
  // this.doctorData = this.doctorData.filter(doctor => doctor.firstName !== data.firstName);
  // this.refreshDoctors.next(this.doctorData);
  // }

  getImages(image: string) {
    return this.imageMap.get(image);
  }

  onViewItemClick(params: any) {
    const dialogRef = this.dialog.open(ViewDoctorComponent, {
      height: '400px',
      width: '600px',
      data: params
    });
  }

  onEditItemClick(params: any) {
    const dialogRef = this.dialog.open(UpdateDoctorComponent, {
      height: '80%',
      width: '80%',
      data: params
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getDoctorsList().subscribe(responseData => {
        this.editDoctor.next(responseData);
      });
    });


    console.log(params);
  }

  onAddItemClick(params: any) {
    const dialogRef = this.dialog.open(AddDoctorComponent, {
      height: '80%',
      width: '80%',
      data: params
    });
    dialogRef.afterClosed().subscribe(result => {
      debugger;
      this.getDoctorsList().subscribe(responseData => {
        this.refreshDoctors.next(responseData);
      });
    });
   // console.log(params);
  }

  onDeleteItemClick(params: any) {
    const dialogRef = this.dialog.open(DeleteDoctorComponent, {
      height: '80%',
      width: '80%',
      data: params
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getDoctorsList().subscribe(responseData => {
        this.deleteDoctor.next(responseData as any);
      });
      console.log(this.doctorData);
    });
  }
}
