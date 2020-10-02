import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Proyecto';
  public name: string ="Shiba Inu";

//Habilitar Classes a html
  public available: boolean=true;

  public photo1: string = "https://material.angular.io/assets/img/examples/shiba2.jpg";

  //ngfor
  public skills: string[] = ['lindo', 'horrible', 'feo'];

}
