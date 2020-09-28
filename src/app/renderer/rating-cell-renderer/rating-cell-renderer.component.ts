import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams, IAfterGuiAttachedParams } from 'ag-grid-community';

@Component({
  selector: 'app-rating-cell-renderer',
  templateUrl: './rating-cell-renderer.component.html',
  styleUrls: ['./rating-cell-renderer.component.css']
})
export class RatingCellRendererComponent implements OnInit, ICellRendererAngularComp {
  params = [];
  constructor() { }
  refresh(params: any): boolean {
    return true;
  }
  agInit(params: ICellRendererParams): void {
    for (let i = 0; i < params.value; i++) {
      this.params.push(i);
    }
  }

  ngOnInit() {
  }

}
