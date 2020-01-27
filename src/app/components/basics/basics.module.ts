import { NgModule } from '@angular/core';

import {BoosterComponent} from './booster/booster.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    BoosterComponent
  ],
  imports: [
    FormsModule
  ],
  exports: [
    BoosterComponent
  ]
})
export class BasicsModule { }
