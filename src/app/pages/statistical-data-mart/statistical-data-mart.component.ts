import { Component } from '@angular/core';
import {NgbNav, NgbNavContent, NgbNavItem, NgbNavLink, NgbNavLinkBase, NgbNavOutlet} from "@ng-bootstrap/ng-bootstrap";
import {EconomicStatisticsItemsComponent} from "./economic-statistics-items/economic-statistics-items.component";
import {SocialStatisticsItemsComponent} from "./social-statistics-items/social-statistics-items.component";
import {
    SpatialResourcesStatisticsItemsComponent
} from "./spatial-resources-statistics-items/spatial-resources-statistics-items.component";

@Component({
  selector: 'app-statistical-data-mart',
  standalone: true,
    imports: [
        NgbNav,
        NgbNavContent,
        NgbNavLink,
        NgbNavLinkBase,
        NgbNavOutlet,
        NgbNavItem,
        EconomicStatisticsItemsComponent,
        SocialStatisticsItemsComponent,
        SpatialResourcesStatisticsItemsComponent
    ],
  templateUrl: './statistical-data-mart.component.html',
  styleUrl: './statistical-data-mart.component.scss'
})
export class StatisticalDataMartComponent {

}
