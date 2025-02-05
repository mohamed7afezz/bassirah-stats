import { Component } from '@angular/core';
import {NgbNav, NgbNavContent, NgbNavItem, NgbNavLink, NgbNavLinkBase, NgbNavOutlet} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-short-term-business-dtatistics',
  standalone: true,
    imports: [
        NgbNav,
        NgbNavContent,
        NgbNavLink,
        NgbNavLinkBase,
        NgbNavOutlet,
        NgbNavItem
    ],
  templateUrl: './short-term-business-dtatistics.component.html',
  styleUrl: './short-term-business-dtatistics.component.scss'
})
export class ShortTermBusinessDtatisticsComponent {

}
