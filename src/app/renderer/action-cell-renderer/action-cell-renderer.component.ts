import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams, IAfterGuiAttachedParams } from 'ag-grid-community';

@Component({
  selector: 'app-action-cell-renderer',
  templateUrl: './action-cell-renderer.component.html',
  styleUrls: ['./action-cell-renderer.component.css']
})
export class ActionCellRendererComponent implements OnInit, ICellRendererAngularComp {
  params: any;
  constructor() { }
  refresh(params: any): boolean {
    return true;
  }
  agInit(params: ICellRendererParams): void {
    this.params = params;
  }

  ngOnInit() {
  }

  onViewClick($event) {
    if (this.params.onViewClick instanceof Function) {
      const localParams = {
        event: $event,
        doctorId: this.params.node.data.doctorId
      };
      this.params.onViewClick(localParams);
    }
  }

  onEditClick($event) {
    if (this.params.onEditClick instanceof Function) {
      const localParams = {
        event: $event,
        rowData: this.params.node.data
      };
      this.params.onEditClick(localParams);
    }
  }

  onDeleteClick($event) {
    if (this.params.onDeleteClick instanceof Function) {
      const localParams = {
        event: $event,
        rowData: this.params.node.data
      };
      this.params.onDeleteClick(localParams);
    }
  }

  onAddClick($event) {
    if (this.params.onAddClick instanceof Function) {
      const localParams = {
        event: $event,
        rowData: this.params.node.data
      };
      this.params.onAddClick(localParams);
    }

  }

}
