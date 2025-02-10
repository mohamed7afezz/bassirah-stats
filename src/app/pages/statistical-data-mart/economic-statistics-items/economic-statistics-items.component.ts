import { Component } from '@angular/core';
import {NgbNav, NgbNavContent, NgbNavItem, NgbNavLink, NgbNavLinkBase, NgbNavOutlet} from "@ng-bootstrap/ng-bootstrap";
import {GDPAndNationalAccountsComponent} from "./gdp-and-national-accounts/gdp-and-national-accounts.component";
import {PricesComponent} from "./prices/prices.component";
import {InternationalTradeComponent} from "./international-trade/international-trade.component";
import {EnergyComponent} from "./energy/energy.component";

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
        GDPAndNationalAccountsComponent,
        PricesComponent,
        InternationalTradeComponent,
        EnergyComponent
    ],
  templateUrl: './economic-statistics-items.component.html',
  styleUrl: './economic-statistics-items.component.scss'
})
export class EconomicStatisticsItemsComponent {

}
