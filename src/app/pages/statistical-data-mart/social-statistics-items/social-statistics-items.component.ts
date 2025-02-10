import { Component } from '@angular/core';
import {NgbNav, NgbNavContent, NgbNavItem, NgbNavLink, NgbNavLinkBase, NgbNavOutlet} from "@ng-bootstrap/ng-bootstrap";
import {HajjUmrahStatisticsComponent} from "./hajj-umrah-statistics/hajj-umrah-statistics.component";
import {PopulationComponent} from "./population/population.component";

@Component({
  selector: 'app-social-statistics-items',
  standalone: true,
    imports: [
        NgbNav,
        NgbNavContent,
        NgbNavLink,
        NgbNavLinkBase,
        NgbNavOutlet,
        NgbNavItem,
        HajjUmrahStatisticsComponent,
        PopulationComponent
    ],
  templateUrl: './social-statistics-items.component.html',
  styleUrl: './social-statistics-items.component.scss'
})
export class SocialStatisticsItemsComponent {

}
