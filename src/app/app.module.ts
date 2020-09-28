import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PatientComponent } from './patient/patient.component';
import { PatientListComponent } from './patient/patient-list/patient-list.component';
import { PatientItemComponent } from './patient/patient-list/patient-item/patient-item.component';
import { AddPatientComponent } from './patient/add-patient/add-patient.component';
import { UpdatePatientComponent } from './patient/update-patient/update-patient.component';
import { ViewPatientComponent } from './patient/view-patient/view-patient.component';
import { DeletePatientComponent } from './patient/delete-patient/delete-patient.component';
import { DoctorComponent } from './doctor/doctor.component';
import { DoctorListComponent } from './doctor/doctor-list/doctor-list.component';
import { DoctorItemComponent } from './doctor/doctor-list/doctor-item/doctor-item.component';
import { AddDoctorComponent } from './doctor/add-doctor/add-doctor.component';
import { UpdateDoctorComponent } from './doctor/update-doctor/update-doctor.component';
import { ViewDoctorComponent } from './doctor/view-doctor/view-doctor.component';
import { DeleteDoctorComponent } from './doctor/delete-doctor/delete-doctor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './material.module';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { ActionCellRendererComponent } from './renderer/action-cell-renderer/action-cell-renderer.component';
import { RatingCellRendererComponent } from './renderer/rating-cell-renderer/rating-cell-renderer.component';
import { InsuranceCellRendererComponent } from './renderer/insurance-cell-renderer/insurance-cell-renderer.component';
import { AvailabilityCellRendererComponent } from './renderer/availability-cell-renderer/availability-cell-renderer.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {path: 'doctor', component: DoctorComponent,
    children: [
      {path: 'view-doctor', component: ViewDoctorComponent},
      {path: 'update-doctor', component: UpdateDoctorComponent},
      {path: 'add-doctor', component: AddDoctorComponent}
    ]},
  {path: 'patient', component: PatientComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    PatientListComponent,
    PatientItemComponent,
    AddPatientComponent,
    UpdatePatientComponent,
    ViewPatientComponent,
    DeletePatientComponent,
    DoctorComponent,
    DoctorListComponent,
    DoctorItemComponent,
    AddDoctorComponent,
    UpdateDoctorComponent,
    ViewDoctorComponent,
    DeleteDoctorComponent,
    ActionCellRendererComponent,
    RatingCellRendererComponent,
    InsuranceCellRendererComponent,
    AvailabilityCellRendererComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgGridModule.withComponents([ActionCellRendererComponent, RatingCellRendererComponent,
                                InsuranceCellRendererComponent, AvailabilityCellRendererComponent])
  ],
  entryComponents: [ViewDoctorComponent,
                    DeleteDoctorComponent,
                    ViewPatientComponent,
                    UpdatePatientComponent,
                    AddPatientComponent,
                    DeletePatientComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
