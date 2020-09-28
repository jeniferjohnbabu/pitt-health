import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams, IAfterGuiAttachedParams } from 'ag-grid-community';
import { DoctorService } from 'src/app/shared/doctor.service';

@Component({
  selector: 'app-insurance-cell-renderer',
  templateUrl: './insurance-cell-renderer.component.html',
  styleUrls: ['./insurance-cell-renderer.component.css']
})
export class InsuranceCellRendererComponent implements OnInit, ICellRendererAngularComp {
  params: any;
  imagePath = '';
  constructor(private doctorService: DoctorService) { }
  refresh(params: any): boolean {
    return true;
  }
  agInit(params: ICellRendererParams): void {
    this.params = params;
    this.imagePath = this.doctorService.getImages(params.value);
    // console.log(params);
  }

  ngOnInit() {
  }

}
