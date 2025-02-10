import { Component } from '@angular/core';
import {NgbNav, NgbNavContent, NgbNavItem, NgbNavLink, NgbNavLinkBase, NgbNavOutlet} from "@ng-bootstrap/ng-bootstrap";
import {GrossDomesticProductComponent} from "./gross-domestic-product/gross-domestic-product.component";
import {GrossNationalIncomeComponent} from "./gross-national-income/gross-national-income.component";
import {EnergyComponent} from "../energy/energy.component";
import {InternationalTradeComponent} from "../international-trade/international-trade.component";
import {PricesComponent} from "../prices/prices.component";

@Component({
  selector: 'app-gdp-and-national-accounts',
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
        EnergyComponent,
        InternationalTradeComponent,
        PricesComponent

    ],
  templateUrl: './gdp-and-national-accounts.component.html',
  styleUrl: './gdp-and-national-accounts.component.scss'
})
export class GDPAndNationalAccountsComponent {

}
