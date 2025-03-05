import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-work-flow-edit',
  standalone: true,
  imports: [],
  templateUrl: './work-flow-edit.component.html',
  styleUrl: './work-flow-edit.component.scss'
})
export class WorkFlowEditComponent {
  url: string = "https://sparkly-melba-3afe28.netlify.app/";

  safeUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

}
