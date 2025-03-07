import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-work-flow-edit',
  standalone: true,
  imports: [],
  templateUrl: './work-flow-edit.component.html',
  styleUrl: './work-flow-edit.component.scss'
})
export class WorkFlowEditComponent {
  id: string;

  // url: string = "https://sparkly-melba-3afe28.netlify.app/?id=1";
  url: string = "https://sparkly-melba-3afe28.netlify.app/";

  safeUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer, private _activatedRoute: ActivatedRoute) {
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    this._activatedRoute.params.subscribe(params => {
      if (!params['id']) return;
      this.id = params['id'];
      this.url = "https://sparkly-melba-3afe28.netlify.app/?id=" + this.id;
      this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    })
  }

}
