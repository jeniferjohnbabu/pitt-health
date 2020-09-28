import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DoctorService } from 'src/app/shared/doctor.service';
import { MatDialog } from '@angular/material/dialog';
import { ViewDoctorComponent } from '../view-doctor/view-doctor.component';
import { DoctorModel } from 'src/app/shared/doctor.model';
import { UpdateDoctorComponent } from '../update-doctor/update-doctor.component';
import { AddDoctorComponent } from '../add-doctor/add-doctor.component';
import { MatTableDataSource } from '@angular/material/table';
import { DeleteDoctorComponent } from '../delete-doctor/delete-doctor.component';
import { ActionCellRendererComponent } from 'src/app/renderer/action-cell-renderer/action-cell-renderer.component';
import { RatingCellRendererComponent } from 'src/app/renderer/rating-cell-renderer/rating-cell-renderer.component';
import { InsuranceCellRendererComponent } from 'src/app/renderer/insurance-cell-renderer/insurance-cell-renderer.component';
import { AvailabilityCellRendererComponent } from 'src/app/renderer/availability-cell-renderer/availability-cell-renderer.component';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {
  doctorColumnDefs = [];
  dataSource: any;
  frameWorksComponents = {};
  gridParams: any;
  constructor(private doctorService: DoctorService,
              public dialog: MatDialog) {}

  ngOnInit() {
    this.frameWorksComponents = {
      customActionRenderer: ActionCellRendererComponent,
      customRatingRenderer: RatingCellRendererComponent,
      customInsuranceRenderer: InsuranceCellRendererComponent,
      customAvailabilityRenderer: AvailabilityCellRendererComponent
    };
    this.doctorColumnDefs = this.doctorService.doctorColumnDefs;
    // this.dataSource = this.doctorService.getAllDoctors();
    this.doctorService.refreshDoctors.subscribe(doctors => {
      this.gridParams.api.setRowData(doctors);
    });
    this.doctorService.deleteDoctor.subscribe(doctors => {
      this.gridParams.api.setRowData(doctors);
      // this.gridParams.api.applyTransaction({remove: [doctor]});
    });
    this.doctorService.editDoctor.subscribe(doctors => {
      this.gridParams.api.setRowData(doctors);
    });

    this.doctorService.getDoctorsList().subscribe(responseData => {
      this.dataSource = responseData;
    });
  }


  onGridReady(params) {
    this.gridParams = params;
    params.api.sizeColumnsToFit();
  }

  // openDialog(selectedDoctor: DoctorModel) {
  //   const dialogRef = this.dialog.open(ViewDoctorComponent, {
  //     height: '400px',
  //     width: '600px',
  //     data: selectedDoctor
  //   });
  // }

  // onEditDoctor(doctor: DoctorModel) {
  //   const dialogRef = this.dialog.open(UpdateDoctorComponent, {
  //     height: '400px',
  //     width: '600px',
  //     data: doctor
  //   });
  //   dialogRef.afterClosed().subscribe(result => {
  //     this.doctorService.updateDoctorDetail(result);
  //   });
  // }

  // onAddDoctor() {
  //   const dialogRef = this.dialog.open(AddDoctorComponent, {
  //     height: '90%',
  //     width: '90%'
  //   });
  //   dialogRef.afterClosed().subscribe(result => {
  //     this.doctorService.addNewDoctor(result);
  //   });
  // }

  // onRemoveDoctor(selectedDoctor: DoctorModel) {
  //   const dialogRef = this.dialog.open(DeleteDoctorComponent, {
  //     height: '400px',
  //     width: '600px',
  //     data: selectedDoctor
  //   });
  // }
}
