import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams, IAfterGuiAttachedParams } from 'ag-grid-community';
import { DoctorService } from 'src/app/shared/doctor.service';

@Component({
  selector: 'app-availability-cell-renderer',
  templateUrl: './availability-cell-renderer.component.html',
  styleUrls: ['./availability-cell-renderer.component.css']
})
export class AvailabilityCellRendererComponent implements OnInit, ICellRendererAngularComp {
  params: any;
  availabilty = false;
  constructor(private doctorService: DoctorService) { }
  refresh(params: any): boolean {
    return true;
  }
  agInit(params: ICellRendererParams): void {
    this.params = params;
    this.availabilty = params.value;
    // console.log(this.availabilty);
  }


  ngOnInit() {
  }

}
