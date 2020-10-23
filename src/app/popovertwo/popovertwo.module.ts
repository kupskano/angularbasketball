import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopovertwoPageRoutingModule } from './popovertwo-routing.module';

import { PopovertwoPage } from './popovertwo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopovertwoPageRoutingModule
  ],
  declarations: [PopovertwoPage]
})
export class PopovertwoPageModule {}
