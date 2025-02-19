import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { WorkflowDiagramComponent } from '../workflow-diagram/workflow-diagram.component';

@Component({
  selector: 'app-work-flow',
  standalone: true,
  imports: [WorkflowDiagramComponent],
  templateUrl: './work-flow.component.html',
  styleUrl: './work-flow.component.scss'
})
export class WorkFlowComponent implements OnInit {
  url: string = "https://demo.workflowserver.io/?apanel=workflow&aid=BPMN2?embedded=true";
  safeUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

  ngOnInit(): void { }

  // Handle iframe load event
  onIframeLoad(): void {
    const iframe = document.querySelector('iframe');
    if (iframe) {
      // Send a message to the iframe
      iframe.contentWindow?.postMessage({ action: 'clickButton' }, '*');
    }
  }
}