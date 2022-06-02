import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  porcentaje = 33
  radioValue = 'B';
  constructor() { }

  ngOnInit() {
  }
}
