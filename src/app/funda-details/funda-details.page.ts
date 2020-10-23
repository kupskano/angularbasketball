import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-funda-details',
  templateUrl: './funda-details.page.html',
  styleUrls: ['./funda-details.page.scss'],
})
export class FundaDetailsPage implements OnInit {
  id: any;
  title: any;
  description: any;

  constructor(
   public popoverController: PopoverController,
   private actRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.popoverController.dismiss();
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.title  = this.actRoute.snapshot.paramMap.get('title');
    this.description = this.actRoute.snapshot.paramMap.get('description');
  }

}
