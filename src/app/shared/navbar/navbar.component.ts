import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Busqueda } from '../models/movie.model';
import { MoviesService } from '../services/movies.service';

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
  constructor(private movieService: MoviesService) {}

  ngOnInit(): void {}
  buscar(form: NgForm) {
    console.log('busqueda', form.value);
    this.movieService
      .getMovies(form.value.pelicula, 1)
      .subscribe((peliculas) => {
        console.log(peliculas);
      });
    form.reset();
  }
}
