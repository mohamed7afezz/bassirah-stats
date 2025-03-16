import { Component, OnInit } from '@angular/core';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Router, RouterLink, RouterOutlet } from "@angular/router";
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { NgClass } from "@angular/common";
import { WorkFlowEditComponent } from "../../../work-flow-edit/work-flow-edit.component";
@Component({
  selector: 'app-economic-statistics',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    NgClass,
    WorkFlowEditComponent
],
  templateUrl: './economic-statistics.component.html',
  styleUrl: './economic-statistics.component.scss'
})
export class EconomicStatisticsComponent implements OnInit {

  showEditWorkflow: string = 'false';
  id: string;
  url: string = "https://sparkly-melba-3afe28.netlify.app/";
  safeUrl: SafeResourceUrl;
  imagename: any;
  PageURL: any;
  activeXML: any;

  constructor(private sanitizer: DomSanitizer, private _activatedRoute: ActivatedRoute,private modalService: NgbModal, private _router: Router) { }


  ngOnInit(): void {
    // Add initialization logic here if needed
    this._activatedRoute.queryParams.subscribe(params => {
      this.activeXML = params['active_xml']; // Update the activeXML value
    });
  }

  /**
 * Open Success modal
 * @param successModal Success modal data
 */
  successModal(successDataModal: any, PageURL: any, imagename: any) {
    this.modalService.open(successDataModal, { centered: true });
    this.PageURL = PageURL;
    this.imagename = imagename;
  }

  navigateToWorkflowEditMode(id: string) {
    this._router.navigate([], {
      relativeTo: this._activatedRoute, // Assuming you have ActivatedRoute injected
      queryParams: { active_xml: id },
      queryParamsHandling: 'merge' // This will merge the new query params with the existing ones
    });
    this.showEditWorkflow = 'true';
  }

  protected readonly parent = parent;
}
