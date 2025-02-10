import { Component } from '@angular/core';
import {NgbNav, NgbNavContent, NgbNavItem, NgbNavLink, NgbNavLinkBase, NgbNavOutlet} from "@ng-bootstrap/ng-bootstrap";
import {SDG3GoodHealthWellBeingComponent} from "./sdg3-good-health-well-being/sdg3-good-health-well-being.component";
import {SDG4QualityEducationComponent} from "./sdg4-quality-education/sdg4-quality-education.component";
import {SDG6CleanWaterSanitationComponent} from "./sdg6-clean-water-sanitation/sdg6-clean-water-sanitation.component";

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
        SDG3GoodHealthWellBeingComponent,
        SDG4QualityEducationComponent,
        SDG6CleanWaterSanitationComponent
    ],
  templateUrl: './spatial-resources-statistics-items.component.html',
  styleUrl: './spatial-resources-statistics-items.component.scss'
})
export class SpatialResourcesStatisticsItemsComponent {

}
