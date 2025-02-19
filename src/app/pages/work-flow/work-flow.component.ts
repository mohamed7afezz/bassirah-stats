import { Component } from '@angular/core';
import { WorkflowDesignerModule } from '@optimajet/workflow-designer-angular';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-work-flow',
  standalone: true,
  imports: [WorkflowDesignerModule],
  templateUrl: './work-flow.component.html',
  styleUrl: './work-flow.component.scss'
})
export class WorkFlowComponent {
  schemeCode = 'SimpleWF';
  processId = '';
  designerConfig = {
    apiurl: 'https://demo.workflowengine.io/Designer/API',
    renderTo: 'wf-designer',
    uploadFormId: 'wf-uploadFormId',
    uploadFileId: 'wf-uploadFileId',
    widthDiff: 0,
    heightDiff: 0,
    name: 'wfe',
    language: 'en',
    // customLocalization: [el]
  };

  url: string = "https://demo.workflowserver.io/?apanel=workflow&aid=BPMN2";
  // Sanitize the URL
  safeUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

  // Handle workflow changes
  onWorkflowChange(event: any) {
    console.log('Workflow changed:', event);
  }
}