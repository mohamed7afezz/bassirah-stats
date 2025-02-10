import { Component } from '@angular/core';
import {
    ConsumerPriceIndexComponent
} from "../../economic-statistics-items/prices/consumer-price-index/consumer-price-index.component";
import {NgbNav, NgbNavContent, NgbNavItem, NgbNavLink, NgbNavLinkBase, NgbNavOutlet} from "@ng-bootstrap/ng-bootstrap";
import {
    WholesalePriceIndexComponent
} from "../../economic-statistics-items/prices/wholesale-price-index/wholesale-price-index.component";
import {PopulationStatisticsComponent} from "./population-statistics/population-statistics.component";
import {ReproductiveMotherHealthComponent} from "./reproductive-mother-health/reproductive-mother-health.component";
import {LifeExpectancyAtBirthComponent} from "./life-expectancy-at-birth/life-expectancy-at-birth.component";
import {MortalityComponent} from "./mortality/mortality.component";

@Component({
  selector: 'app-population',
  standalone: true,
    imports: [
        ConsumerPriceIndexComponent,
        NgbNav,
        NgbNavContent,
        NgbNavLink,
        NgbNavLinkBase,
        WholesalePriceIndexComponent,
        NgbNavOutlet,
        NgbNavItem,
        PopulationStatisticsComponent,
        ReproductiveMotherHealthComponent,
        LifeExpectancyAtBirthComponent,
        MortalityComponent
    ],
  templateUrl: './population.component.html',
  styleUrl: './population.component.scss'
})
export class PopulationComponent {

}
