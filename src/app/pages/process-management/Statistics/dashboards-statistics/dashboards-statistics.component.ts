import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-dashboards-statistics',
  standalone: true,
  imports: [RouterLink, NgClass],
  templateUrl: './dashboards-statistics.component.html',
  styleUrl: './dashboards-statistics.component.scss'
})
export class DashboardsStatisticsComponent {
  imagename : string  = "workflow2.jpeg";
  activeButton: string = 'original-workflow';

  changeImage( imagename: string ,activeButton:string     ) {
    this.imagename = imagename;
    this.activeButton = activeButton;
  }


}
