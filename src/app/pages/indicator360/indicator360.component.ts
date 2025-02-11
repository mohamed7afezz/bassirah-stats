import { Component, ViewEncapsulation } from '@angular/core';
import { WidgetModule } from '../../shared/widget/widget.module';
import {FeatherModule} from "angular-feather";
import {NgClass} from "@angular/common";
import {CountUpModule} from "ngx-countup";
import {RouterLink, RouterOutlet} from "@angular/router";


@Component({
  selector: 'app-indicator360',
  standalone: true,
  imports: [WidgetModule, FeatherModule, NgClass, CountUpModule, RouterLink, RouterOutlet],
  templateUrl: './indicator360.component.html',
  styleUrl: './indicator360.component.scss',
  encapsulation: ViewEncapsulation.None // Disable view encapsulation
})


export class Indicator360Component {
  statData!: any;
  ngOnInit(): void {
    this.fetchData();
  }

  private fetchData() {
    this.statData = [
      {
        title: 'Gross Domestic Product (GDP)',
        link_url: 'gross-domestic-product',
        value: 1700000,
        icon: 'la-hand-holding-usd',
        persantage: '6.25',
        profit: 'up'
      }, {
        title: 'ICT Employment Rate',
        link_url: 'indicator360/trend-analysis',
        value: 12,
        icon: 'la-chalkboard-teacher',
        persantage: '4.35',
        profit: 'up'
      }, {
        title: 'Total Exports',
        link_url: 'indicator360/top-historical-publications',
        value: 1200000,
        icon: 'la-ship',
        persantage: '4.35',
        profit: 'up'
      }, {
        title: 'Total Imports',
        link_url: 'indicator360/main-authors',
        value: 2300000,
        icon: 'la-boxes',
        persantage: '2.22',
        profit: 'up'
      },
      {
        title: 'Consumer Price Index',
        link_url: 'indicator360/relation-to-indicators-and-predictors',
        value: 112.28,
        icon: 'la-cart-arrow-down',
        persantage: '2.07',
        profit: 'up'
      }, {
        title: 'Life Expectancy at Birth',
        link_url: 'indicator360/relation-to-indicators-and-predictors',
        value: 78.5,
        icon: 'la-baby-carriage',
        persantage: '0.38',
        profit: 'up'
      }, 
      {
        title: 'Electricity In Household',
        link_url: 'indicator360/web-interactions-and-data-requests',
        value: 28.50,
        icon: 'la-plug',
        persantage: '11.33',
        profit: 'up'
      },
      {
        title: 'Tourism, Hajj and Umrah Statistics',
        link_url: 'indicator360/web-interactions-and-data-requests',
        value: 200000000,
        icon: 'la-pray',
        persantage: '25.55',
        profit: 'up'
      },
      {
        title: 'Agriculture Census',
        link_url: 'indicator360/web-interactions-and-data-requests',
        value: 5000000,
        icon: 'la-campground',
        persantage: '20',
        profit: 'up'
      },
      {
        title: 'Health Care Statistics',
        link_url: 'indicator360/web-interactions-and-data-requests',
        value: 35.7,
        icon: 'la-hospital',
        persantage: '16.44',
        profit: 'up'
      },
      {
        title: 'Labor Market Statistics',
        link_url: 'indicator360/web-interactions-and-data-requests',
        value: 55000000,
        icon: 'la-cart-plus',
        persantage: '25.55',
        profit: 'up'
      },
      {
        title: 'Short Term Business Statistics',
        link_url: 'indicator360/web-interactions-and-data-requests',
        value: 10000000,
        icon: 'la-business-time',
        persantage: '27.9',
        profit: 'up'
      },
    ];
  }
}
