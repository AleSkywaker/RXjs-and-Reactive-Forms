import { Component, ViewChild } from '@angular/core';
import { MoviesService } from '../../shared/services/movies.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['Title', 'Year', 'imdbID', 'Type', 'Poster'];
  dataSource;
  constructor(private movieService: MoviesService) {
    this.movieService.getMovies('Batman', 1).subscribe((d) => {
      console.log(d);
      this.dataSource = new MatTableDataSource(d);
      this.dataSource.sort = this.sort;
    });
  }
}
