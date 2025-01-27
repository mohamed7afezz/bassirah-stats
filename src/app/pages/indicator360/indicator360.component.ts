import { Component, ViewEncapsulation } from '@angular/core';
import { WidgetModule } from '../../shared/widget/widget.module';


@Component({
  selector: 'app-indicator360',
  standalone: true,
  imports: [WidgetModule],
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
        title: 'Upcoming Indicator Publications',
        link_url: '/upcoming-indicator-publications',
        value: 28.05,
        icon: 'users',
        persantage: '16.24',
        profit: 'up'
      }, {
        title: 'Indicator Trend Analysis',
        link_url: '/indicator-trend-analysis',
        value: 97.66,
        icon: 'activity',
        persantage: '3.96',
        profit: 'down'
      }, {
        title: 'Indicator’s Top Historical Publications',
        link_url: '/indicator-s-top-historical-publications',
        value: 3.40,
        icon: 'clock',
        persantage: '0.24',
        profit: 'down'
      }, {
        title: 'Indicator’s Main Authors',
        link_url: '/indicator-s-main-authors',
        value: 3.40,
        icon: 'external-link',
        persantage: '7.05',
        profit: 'up'
      },
      {
        title: 'Indicator relations to Micro-data predictors',
        link_url: '/indicator-relations-to-micro-data-predictors',
        value: 28.05,
        icon: 'users',
        persantage: '16.24',
        profit: 'up'
      }, {
        title: 'Indicator relations to other indicators',
        link_url: '/indicator-relations-to-other-indicators',
        value: 97.66,
        icon: 'activity',
        persantage: '3.96',
        profit: 'down'
      }, {
        title: 'Indicator’s data request over time',
        link_url: '/indicator-s-data-request-over-time',
        value: 3.40,
        icon: 'clock',
        persantage: '0.24',
        profit: 'down'
      }, {
        title: 'Indicator web interactions over time',
        link_url: '/indicator-web-interactions-over-time',
        value: 33.48,
        icon: 'external-link',
        persantage: '7.05',
        profit: 'up'
      }
    ];
  }
}
