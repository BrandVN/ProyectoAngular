import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
interface registro {
}

@Component({
  selector: 'app-welcome',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  porcentaje = 33
  radioValue = 'B';
  listOfData: any;
  id = "";
  nombres = "";
  ap = "";
  am = "";
  fdn = "";
  sexo = "";


  constructor(private http: HttpClient) {

}

  ngOnInit() {
      console.log("NG ON INIT")

      const apiURL ='http://localhost:1337/api/curps/1';

      this.http.get(apiURL).subscribe((data: any) => {
        console.log(data)
        this.id = data.data.attributes.id
        this.nombres = data.data.attributes.Nombre
        this.ap = data.data.attributes.ApellidoPaterno
        this.am = data.data.attributes.ApellidoMaterno
        this.fdn = data.data.attributes.FechaDeNacimiento
        this.sexo = data.data.attributes.Sexo

      });
    }
}

