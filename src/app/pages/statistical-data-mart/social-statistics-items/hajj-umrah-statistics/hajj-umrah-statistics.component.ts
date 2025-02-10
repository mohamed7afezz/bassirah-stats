import { Component } from '@angular/core';
import {
    ConsumerPriceIndexComponent
} from "../../economic-statistics-items/prices/consumer-price-index/consumer-price-index.component";
import {NgbNav, NgbNavContent, NgbNavItem, NgbNavLink, NgbNavLinkBase, NgbNavOutlet} from "@ng-bootstrap/ng-bootstrap";
import {
    WholesalePriceIndexComponent
} from "../../economic-statistics-items/prices/wholesale-price-index/wholesale-price-index.component";
import {HajjStatisticsComponent} from "./hajj-statistics/hajj-statistics.component";
import {UmrahStatisticsComponent} from "./umrah-statistics/umrah-statistics.component";

@Component({
  selector: 'app-hajj-umrah-statistics',
  standalone: true,
    imports: [
        ConsumerPriceIndexComponent,
        NgbNav,
        NgbNavContent,
        NgbNavLink,
        NgbNavLinkBase,
        WholesalePriceIndexComponent,
        NgbNavItem,
        NgbNavOutlet,
        HajjStatisticsComponent,
        UmrahStatisticsComponent
    ],
  templateUrl: './hajj-umrah-statistics.component.html',
  styleUrl: './hajj-umrah-statistics.component.scss'
})
export class HajjUmrahStatisticsComponent {

}
