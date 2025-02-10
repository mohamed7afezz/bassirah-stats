import { Component } from '@angular/core';
import {ConsumerPriceIndexComponent} from "../prices/consumer-price-index/consumer-price-index.component";
import {NgbNav, NgbNavContent, NgbNavItem, NgbNavLink, NgbNavLinkBase, NgbNavOutlet} from "@ng-bootstrap/ng-bootstrap";
import {WholesalePriceIndexComponent} from "../prices/wholesale-price-index/wholesale-price-index.component";
import {ExportsIndicesComponent} from "./exports-indices/exports-indices.component";
import {ImportIndicesComponent} from "./import-indices/import-indices.component";

@Component({
  selector: 'app-international-trade',
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
        ExportsIndicesComponent,
        ImportIndicesComponent
    ],
  templateUrl: './international-trade.component.html',
  styleUrl: './international-trade.component.scss'
})
export class InternationalTradeComponent {

}
