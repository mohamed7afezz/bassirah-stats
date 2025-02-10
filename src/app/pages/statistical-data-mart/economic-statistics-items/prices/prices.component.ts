import { Component } from '@angular/core';
import {ElectricityHouseholdComponent} from "../energy/electricity-household/electricity-household.component";
import {FuelUsageHouseholdsComponent} from "../energy/fuel-usage-households/fuel-usage-households.component";
import {NgbNav, NgbNavContent, NgbNavItem, NgbNavLink, NgbNavLinkBase, NgbNavOutlet} from "@ng-bootstrap/ng-bootstrap";
import {
    SustainableEnergyAdoptionComponent
} from "../energy/sustainable-energy-adoption/sustainable-energy-adoption.component";
import {ConsumerPriceIndexComponent} from "./consumer-price-index/consumer-price-index.component";
import {WholesalePriceIndexComponent} from "./wholesale-price-index/wholesale-price-index.component";

@Component({
  selector: 'app-prices',
  standalone: true,
    imports: [
        ElectricityHouseholdComponent,
        FuelUsageHouseholdsComponent,
        NgbNav,
        NgbNavContent,
        NgbNavLink,
        NgbNavLinkBase,
        SustainableEnergyAdoptionComponent,
        NgbNavItem,
        NgbNavOutlet,
        ConsumerPriceIndexComponent,
        WholesalePriceIndexComponent
    ],
  templateUrl: './prices.component.html',
  styleUrl: './prices.component.scss'
})
export class PricesComponent {

}
