import { Component } from '@angular/core';
import {NgbNav, NgbNavContent, NgbNavItem, NgbNavLink, NgbNavLinkBase, NgbNavOutlet} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-tourism-hajj-and-umrah-statistics',
  standalone: true,
    imports: [
        NgbNav,
        NgbNavContent,
        NgbNavLink,
        NgbNavLinkBase,
        NgbNavItem,
        NgbNavOutlet
    ],
  templateUrl: './tourism-hajj-and-umrah-statistics.component.html',
  styleUrl: './tourism-hajj-and-umrah-statistics.component.scss'
})
export class TourismHajjAndUmrahStatisticsComponent {

}
