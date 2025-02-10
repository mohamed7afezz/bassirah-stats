import { Component } from '@angular/core';
import {NgbNav, NgbNavContent, NgbNavItem, NgbNavLink, NgbNavLinkBase, NgbNavOutlet} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-sdg3-good-health-well-being',
  standalone: true,
    imports: [
        NgbNav,
        NgbNavContent,
        NgbNavLink,
        NgbNavLinkBase,
        NgbNavItem,
        NgbNavOutlet
    ],
  templateUrl: './sdg3-good-health-well-being.component.html',
  styleUrl: './sdg3-good-health-well-being.component.scss'
})
export class SDG3GoodHealthWellBeingComponent {

}
