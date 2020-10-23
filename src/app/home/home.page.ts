import { Component, ViewChild } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Chart } from 'chart.js';
import { PopoverComponent } from '../popover/popover.component';
import { PopovertwoPage } from '../popovertwo/popovertwo.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('barChart') barChart;


  bars: any;
  colorArray: any;

  constructor(
    public popoverController: PopoverController
  ) {}

  ionViewDidEnter() {
    this.createBarChart();
  }

  createBarChart() {
    this.bars = new Chart(this.barChart.nativeElement,{
      type: 'bar',
      data: {
        labels: ['01', '02', '03', '04', '05', '06', '07', '08'],
        datasets: [{
          label: 'Data Gathered',
          data: [2.5, 3.8, 5, 6.9, 6.9, 7.5, 10, 17],
          backgroundColor: 'rgb(38, 194, 129)', // array should have same number of elements as number of dataset
          borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
     }


async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopovertwoPage,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
    

}
