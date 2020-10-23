import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FundaDetailsPage } from './funda-details.page';

const routes: Routes = [
  {
    path: '',
    component: FundaDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FundaDetailsPageRoutingModule {}
