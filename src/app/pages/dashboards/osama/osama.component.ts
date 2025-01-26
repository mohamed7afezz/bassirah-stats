import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-osama",
  templateUrl: "./osama.component.html",
  styleUrl: "./osama.component.scss",
})
export class OsamaComponent {
  statData!: any;
  ngOnInit(): void {
    this.fetchData();
  }

  private fetchData() {
    this.statData = [{
      title: 'Users',
      value: 28.05,
      icon: 'users',
      persantage: '16.24',
      profit: 'up'
    }, {
        title: 'Sessions',
        value: 97.66,
        icon: 'activity',
        persantage: '3.96',
        profit: 'down'
    }, {
        title: 'Avg. Visit Duration',
        value: 3.40,
        icon: 'clock',
        persantage: '0.24',
        profit: 'down'
    }, {
        title: 'Bounce Rate',
        value: 33.48,
        icon: 'external-link',
        persantage: '7.05',
        profit: 'up'
    }
    ];
  }
}
