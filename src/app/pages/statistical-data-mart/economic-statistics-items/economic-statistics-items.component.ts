import { Component } from '@angular/core';
import {NgbNav, NgbNavContent, NgbNavItem, NgbNavLink, NgbNavLinkBase, NgbNavOutlet} from "@ng-bootstrap/ng-bootstrap";
import {
    ShortTermBusinessDtatisticsComponent
} from "./short-term-business-dtatistics/short-term-business-dtatistics.component";
import {IndustrialProductionIndexComponent} from "./industrial-production-index/industrial-production-index.component";
import {ForeignDirectInvestmentComponent} from "./foreign-direct-investment/foreign-direct-investment.component";

@Component({
  selector: 'app-economic-statistics-items',
  standalone: true,
    imports: [
        NgbNav,
        NgbNavContent,
        NgbNavLink,
        NgbNavLinkBase,
        NgbNavOutlet,
        NgbNavItem,
        ShortTermBusinessDtatisticsComponent,
        IndustrialProductionIndexComponent,
        ForeignDirectInvestmentComponent
    ],
  templateUrl: './economic-statistics-items.component.html',
  styleUrl: './economic-statistics-items.component.scss'
})
export class EconomicStatisticsItemsComponent {

}
