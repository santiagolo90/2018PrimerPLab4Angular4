import { Component, OnInit } from '@angular/core';
import { MiHttpService } from '../../mi-servicio/mi-http.service';
import { Persona } from '../../clases/persona'
// import { getHostElement } from '@angular/core/src/render3';
declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  public listadoDePersonas: Array<any>;
  public esMujer: boolean = false;
  public mostarForm: boolean = true;

  public nombre:string;
  public sexo:string;
  public email:string;
  public clave:string;
  // public foto:string;

  public miPersona:Persona;




  //chIDmostarAlta.disabled =true;

  miServicioDePersonas: MiHttpService;
  constructor(public miHttp: MiHttpService) {
    this.miServicioDePersonas = miHttp;
  }

  public listarTodos(): Promise<Array<any>> {
    return this.miServicioDePersonas.httpGetP('persona/')
      .then(data => {
        console.log(data);
        this.listadoDePersonas = data;
        return data;
      })
      .catch(err => {
        console.log(err);
        return null;
      });
    //return null;

  }



  mostarAlta() {
    let chIDmostarAlta: any = document.getElementById("chIDmostarAlta");
    if (chIDmostarAlta.checked) {
      this.mostarForm = true;
    }
    else {
      this.mostarForm = false;
    }

  }
  agregar() {

    let file_data = $("#perfilFile").prop("files")[0];
    console.log("file_data",file_data);
    //let form_data = new FormData();
    this.miPersona = new Persona(this.nombre,this.sexo,this.email,this.clave,file_data);
    // console.log("normal: ",this.miPersona);

    let miArray: Array <any> = [
      {"nombre": this.nombre},
      {'sexo': this.sexo},
      {'email': this.email},
      {'clave': this.clave}
      //{'foto': file_data.name}
      ];
    
    
      let personaJson = {"nombre":this.nombre,
                         "sexo":this.sexo,
                         "email":this.email,
                         "clave":this.clave
                         //"foto":file_data
                        }


  }


  


  ngOnInit() {
    this.listarTodos();
  }

}
