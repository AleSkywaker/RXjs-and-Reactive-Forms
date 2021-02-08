import { Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MoviesStoreService } from '../../shared/services/movies-store.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['Title', 'Year', 'imdbID', 'Type', 'Poster'];
  constructor(public movieStore: MoviesStoreService) {  }

  ver(id:string){
    console.log("id", id)
  }
}
