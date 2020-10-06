import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class InformacionService {

  info:any ={};
  cargada_info:boolean = false;

  familia:any={};
  carga_familia:boolean = false;

  home:any={};
  carga_home:boolean=false;

  constructor( public http :HttpClient) {


    this.carga_informacion ();
    this.Carga_Familia();
    this.Carga_Home();
    
   }

   /**
    * carga_informacion
    */
   public carga_informacion() {
    this.http.get("assets/Data/Info.pagina.json")
    .subscribe(data =>{console.log(data);
      this.cargada_info = true;
      this.info = (data);
    
    });
   }

   /**
    * Carga_Familia
    */
   public Carga_Familia() {
    this.http.get("assets/Data/prueba.json")
    .subscribe(data =>{console.log(data);
      this.carga_familia = true;
      this.familia = (data);
    
    })
    
     
   }

   /**
    * Carga_Home
    */
   public Carga_Home() {
    this.http.get("assets/Data/home.json")
    .subscribe(data =>{console.log(data);
      this.carga_home = true;
      this.home = (data);
    
    })
   }
}
