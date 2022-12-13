import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  persona = {
    cedula: "",
    nombres: "",
    apellidos: "",
    telefono: "",
    direccion: ""
  }

  constructor(
    public alertController: AlertController,
  ) {}

  ngOnInit() {
  }

  /**
   * METODO PARA DESPLEGAR ALERTA DE GUARDAR PERSONAS
   */
  async alertaGuardarPersona(){//INICIO MÉTODO ALERTAGUARDARPERSONA
    const alert = await this.alertController.create({
      header: "Insertar Nueva Persona",
      message: "Está seguro de que desea insertar una nueva persona con esos datos?",
      buttons: [
        {
          text: 'Si',
          handler: () => {//SI
            console.log("Se inserta persona");
            console.log(this.persona.cedula);
            

            const requestOptions = {
              method: 'POST',
            };

            fetch("crear/" + this.persona.cedula + "," + this.persona.nombres + "," + this.persona.apellidos + "," + this.persona.telefono + "," + this.persona.direccion, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

          }//SI
        },
        {
          text: 'No',
          handler: () => {
            console.log("No se inserta persona");
          }
        }
    ]
    });
    await alert.present()
    let result = await alert.onDidDismiss();
    console.log(result);
  }//FIN METODO ALERTAGUARDARPERSONA

}
