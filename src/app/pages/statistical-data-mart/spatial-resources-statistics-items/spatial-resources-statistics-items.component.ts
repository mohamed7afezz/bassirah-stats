import { Component } from '@angular/core';
import {NgbNav, NgbNavContent, NgbNavItem, NgbNavLink, NgbNavLinkBase, NgbNavOutlet} from "@ng-bootstrap/ng-bootstrap";
import {
    TourismHajjAndUmrahStatisticsComponent
} from "./tourism-hajj-and-umrah-statistics/tourism-hajj-and-umrah-statistics.component";
import {EnvironmentStatisticsComponent} from "./environment-statistics/environment-statistics.component";
import {AgricultureCensusComponent} from "./agriculture-census/agriculture-census.component";

@Component({
  selector: 'app-spatial-resources-statistics-items',
  standalone: true,
    imports: [
        NgbNav,
        NgbNavContent,
        NgbNavLink,
        NgbNavLinkBase,
        NgbNavItem,
        NgbNavOutlet,
        TourismHajjAndUmrahStatisticsComponent,
        EnvironmentStatisticsComponent,
        AgricultureCensusComponent
    ],
  templateUrl: './spatial-resources-statistics-items.component.html',
  styleUrl: './spatial-resources-statistics-items.component.scss'
})
export class SpatialResourcesStatisticsItemsComponent {

}
