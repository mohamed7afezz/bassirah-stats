import { Component, OnInit } from '@angular/core';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Router, RouterLink, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-economic-statistics',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './economic-statistics.component.html',
  styleUrl: './economic-statistics.component.scss'
})
export class EconomicStatisticsComponent implements OnInit {

  ngOnInit(): void {
    // Add initialization logic here if needed
  }

  constructor(private modalService: NgbModal, private _router: Router) { }
  imagename: any;
  PageURL: any;
  /**
 * Open Success modal
 * @param successModal Success modal data
 */
  successModal(successDataModal: any, PageURL: any, imagename: any) {
    this.modalService.open(successDataModal, { centered: true });
    this.PageURL = PageURL;
    this.imagename = imagename;
  }

  navigateToWorkflowEditMode(id: number) {
    this._router.navigate(['/work-flow-edit', id]);
  }

  protected readonly parent = parent;
}
