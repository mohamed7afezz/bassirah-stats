import { Component } from '@angular/core';
import {NgbNav, NgbNavContent, NgbNavItem, NgbNavLink, NgbNavLinkBase, NgbNavOutlet} from "@ng-bootstrap/ng-bootstrap";
import {
    GrossDomesticProductComponent
} from "../gdp-and-national-accounts/gross-domestic-product/gross-domestic-product.component";
import {
    GrossNationalIncomeComponent
} from "../gdp-and-national-accounts/gross-national-income/gross-national-income.component";
import {FuelUsageHouseholdsComponent} from "./fuel-usage-households/fuel-usage-households.component";
import {ElectricityHouseholdComponent} from "./electricity-household/electricity-household.component";
import {SustainableEnergyAdoptionComponent} from "./sustainable-energy-adoption/sustainable-energy-adoption.component";

@Component({
  selector: 'app-energy',
  standalone: true,
    imports: [
        NgbNav,
        NgbNavContent,
        NgbNavLink,
        NgbNavLinkBase,
        NgbNavItem,
        NgbNavOutlet,
        GrossDomesticProductComponent,
        GrossNationalIncomeComponent,
        FuelUsageHouseholdsComponent,
        ElectricityHouseholdComponent,
        SustainableEnergyAdoptionComponent
    ],
  templateUrl: './energy.component.html',
  styleUrl: './energy.component.scss'
})
export class EnergyComponent {

}
