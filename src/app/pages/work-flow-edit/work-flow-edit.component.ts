import { AfterContentInit, Component, ElementRef, Input, OnDestroy, SimpleChanges, ViewChild } from '@angular/core';
import { BpmnPropertiesPanelModule, BpmnPropertiesProviderModule } from 'bpmn-js-properties-panel';
import Modeler from 'bpmn-js/lib/Modeler';
import customPropertiesProvider from '../custom-properties-provider/custom-property-provider';
import { from, Observable } from 'rxjs';
import { xml_1 } from './xml_1';
import { xml_2 } from './xml_2';
import { xml_3 } from './xml_3';
import { ActivatedRoute } from '@angular/router';

// const custom = require('../custom-properties-provider/descriptors/custom.json');

@Component({
  selector: 'app-work-flow-edit',
  standalone: true,
  imports: [],
  templateUrl: './work-flow-edit.component.html',
  styleUrl: './work-flow-edit.component.scss'
})
export class WorkFlowEditComponent implements AfterContentInit, OnDestroy {
  @Input() active_xml: string;
  /**
   * You may include a different variant of BpmnJS:
   *
   * bpmn-viewer  - displays BPMN diagrams without the ability
   *                to navigate them
   * bpmn-modeler - bootstraps a full-fledged BPMN editor
   */
   bpmnJS: Modeler;

  // retrieve DOM element reference
  @ViewChild('diagramRef', {static: true}) diagramRef: ElementRef | undefined;
  @ViewChild('propertiesRef', {static: true}) propertiesRef: ElementRef | undefined;

  private xml: string = xml_3;

  constructor(private _activatedRoute: ActivatedRoute) {
    this.bpmnJS = new Modeler({
      container: this.diagramRef?.nativeElement,
      propertiesPanel: {
        parent: this.propertiesRef
      },
      additionalModules: [
        BpmnPropertiesPanelModule,
        BpmnPropertiesProviderModule,
        customPropertiesProvider
      ],
      moddleExtensions: {
        // custom: custom
      }
    })
  }

  ngAfterContentInit(): void {
    // attach BpmnJS instance to DOM element
    this.bpmnJS!.attachTo(this.diagramRef!.nativeElement);

    const propertiesPanel = this.bpmnJS.get('propertiesPanel');

    // @ts-ignore
    propertiesPanel.attachTo(this.propertiesRef!.nativeElement);
    this.importDiagram(this.xml);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['active_xml'] && changes['active_xml'].currentValue) {
      this.updateXML(changes['active_xml'].currentValue);
    }
  }

  private updateXML(active_xml: string): void {
    if (active_xml === 'xml_1') {
      this.xml = xml_1;
    } else if (active_xml === 'xml_2') {
      this.xml = xml_2;
    } else if (active_xml === 'xml_3') {
      this.xml = xml_3;
    }
    this.importDiagram(this.xml); // Re-import the diagram
  }

  /**
   * Creates a Promise to import the given XML into the current
   * BpmnJS instance, then returns it as an Observable.
   */
  private importDiagram(xml: string): Observable<{ warnings: Array<any> }> {
    return from(this.bpmnJS!.importXML(xml) as Promise<{ warnings: Array<any> }>);
  }

  /**
   * Exports the current BPMN diagram as an XML file and triggers a download of the file.
   * The exported diagram will have a `.xml` file extension and include proper formatting.
   * Shows an error in the console if the `bpmnJS` instance is not initialized.
   *
   * @return {void} No value is returned. The function performs file export and download actions.
   */
  exportDiagram(): void {
    if (!this.bpmnJS) {
      console.error('bpmnJS is not initialized');
      return;
    }

    this.bpmnJS.saveXML({format: true}).then((xml) => {
      // Create a Blob from the XML data
      const blob = new Blob([xml.xml ?? ''], {type: 'text/xml'});
      const url = window.URL.createObjectURL(blob);

      // Create a download link
      const a = document.createElement('a');
      a.href = url;
      a.download = 'diagram.xml';
      a.style.display = 'none';

      // Append the link, trigger download, and clean up
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      // Revoke the object URL after a short delay
      setTimeout(() => window.URL.revokeObjectURL(url), 100);
    }).catch((err) => {
      console.log(err);
    });
  }

  resetDiagram(): void {
    this.importDiagram(this.xml);
  }

  ngOnDestroy(): void {
    // destroy BpmnJS instance
    this.bpmnJS!.destroy();
  }
}
function Import(): (target: WorkFlowEditComponent, propertyKey: "bpmnJS") => void {
  throw new Error('Function not implemented.');
}

