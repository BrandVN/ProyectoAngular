import { NgModule } from '@angular/core';

import { FormularioRoutingModule } from './formulario-routing.module';

import { FormularioComponent } from './formulario.component';
import {NzCardModule} from "ng-zorro-antd/card";
import {NzProgressModule} from "ng-zorro-antd/progress";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzSwitchModule} from "ng-zorro-antd/switch";
import {FormsModule} from "@angular/forms";
import {NzRadioModule} from "ng-zorro-antd/radio";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzBreadCrumbModule} from "ng-zorro-antd/breadcrumb";


@NgModule({
  imports: [FormularioRoutingModule, NzCardModule, NzProgressModule, NzButtonModule, NzSwitchModule, FormsModule, NzRadioModule, NzInputModule, NzIconModule, NzBreadCrumbModule],
  declarations: [FormularioComponent],
  exports: [FormularioComponent]
})
export class FormularioModule { }
