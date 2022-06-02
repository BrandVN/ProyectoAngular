import { NgModule } from '@angular/core';

import { TablaRoutingModule } from './tabla-routing.module';

import { TablaComponent } from './tabla.component';
import {NzCardModule} from "ng-zorro-antd/card";
import {NzProgressModule} from "ng-zorro-antd/progress";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzSwitchModule} from "ng-zorro-antd/switch";
import {FormsModule} from "@angular/forms";
import {NzRadioModule} from "ng-zorro-antd/radio";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzBreadCrumbModule} from "ng-zorro-antd/breadcrumb";
import {NzTableModule} from "ng-zorro-antd/table";
import {CommonModule} from "@angular/common";
import {NzDividerModule} from "ng-zorro-antd/divider";


@NgModule({
  imports: [TablaRoutingModule, NzCardModule, NzProgressModule, NzButtonModule, NzSwitchModule, FormsModule, NzRadioModule, NzInputModule, NzIconModule, NzBreadCrumbModule, NzTableModule, CommonModule, NzDividerModule],
  declarations: [TablaComponent],
  exports: [TablaComponent]
})
export class TablaModule { }
