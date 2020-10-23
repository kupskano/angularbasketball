import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FundaDetailsPageRoutingModule } from './funda-details-routing.module';

import { FundaDetailsPage } from './funda-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FundaDetailsPageRoutingModule
  ],
  declarations: [FundaDetailsPage]
})
export class FundaDetailsPageModule {}
