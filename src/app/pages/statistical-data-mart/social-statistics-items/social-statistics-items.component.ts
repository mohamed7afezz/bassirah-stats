import { Component } from '@angular/core';
import {NgbNav, NgbNavContent, NgbNavItem, NgbNavLink, NgbNavLinkBase, NgbNavOutlet} from "@ng-bootstrap/ng-bootstrap";
import {LaborMarketStatisticsComponent} from "./labor-market-statistics/labor-market-statistics.component";
import {HealthCareStatisticsComponent} from "./health-care-statistics/health-care-statistics.component";
import {
    HealthDeterminantsStatisticsComponent
} from "./health-determinants-statistics/health-determinants-statistics.component";

@Component({
  selector: 'app-social-statistics-items',
  standalone: true,
    imports: [
        NgbNav,
        NgbNavContent,
        NgbNavLink,
        NgbNavLinkBase,
        NgbNavOutlet,
        NgbNavItem,
        LaborMarketStatisticsComponent,
        HealthCareStatisticsComponent,
        HealthDeterminantsStatisticsComponent
    ],
  templateUrl: './social-statistics-items.component.html',
  styleUrl: './social-statistics-items.component.scss'
})
export class SocialStatisticsItemsComponent {

}
