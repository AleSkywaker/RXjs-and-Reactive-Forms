import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  datosBusqueda = {
    pelicula: 'Batman',
    pagina: 1,
  };
  constructor() {}

  ngOnInit(): void {}
  buscar(form: NgForm) {
    console.log('busqueda', form.value);
  }
}
