import { Component } from '@angular/core';
import {NgbNav, NgbNavContent, NgbNavItem, NgbNavLink, NgbNavLinkBase, NgbNavOutlet} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-environment-statistics',
  standalone: true,
    imports: [
        NgbNav,
        NgbNavContent,
        NgbNavLink,
        NgbNavLinkBase,
        NgbNavOutlet,
        NgbNavItem
    ],
  templateUrl: './environment-statistics.component.html',
  styleUrl: './environment-statistics.component.scss'
})
export class EnvironmentStatisticsComponent {

}
