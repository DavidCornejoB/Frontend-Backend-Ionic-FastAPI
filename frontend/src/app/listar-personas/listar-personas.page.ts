import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-personas',
  templateUrl: './listar-personas.page.html',
  styleUrls: ['./listar-personas.page.scss'],
})
export class ListarPersonasPage implements OnInit {

  persona = {
    cedula: "",
    nombres: "",
    apellidos: "",
    telefono: "",
    direccion: ""
  }

  searchedUser: any;
  listaPersonas: any = [];

  constructor() { }

  ngOnInit() {

    var requestOptions = {
      method: 'GET',
    };
    
    fetch("listar", requestOptions)
      .then(response => response.text())
      .then(result => {

        this.listaPersonas = result
        console.log(this.listaPersonas)
        
      })
      .catch(error => console.log('error', error));
  }
}
