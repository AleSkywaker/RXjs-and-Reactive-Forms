import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Busqueda } from '@models/movie.model';
import { MoviesStoreService } from '@services//movies-store.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  datosBusqueda: Busqueda = {
    pelicula: '',
    pagina: 1,
  };
  constructor(public movieStore: MoviesStoreService) {}

  ngOnInit(): void {}
  buscar(form: NgForm) {
    this.movieStore.searchByTitle(form.value.pelicula, this.datosBusqueda.pagina).subscribe()
    form.reset();
  }
}
