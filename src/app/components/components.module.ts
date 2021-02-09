import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [TableComponent, DetailsComponent],
  imports: [CommonModule, MatTableModule, MatSortModule],
  exports: [TableComponent],
})
export class ComponentsModule {}
