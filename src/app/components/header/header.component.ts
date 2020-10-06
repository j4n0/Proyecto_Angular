import { Component, OnInit } from '@angular/core';

import {InformacionService} from '../../services/informacion.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor(
    //metedo de iinformacion service
    public _is:InformacionService
  ) { }

  ngOnInit() {
  }

}
