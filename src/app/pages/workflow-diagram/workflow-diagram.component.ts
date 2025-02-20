import { Component, ViewChild, ElementRef } from '@angular/core';

declare var mxGraph: any;
declare var mxHierarchicalLayout: any;

@Component({
  selector: 'app-workflow-diagram',
  standalone: true,
  imports: [],
  templateUrl: './workflow-diagram.component.html',
  // styleUrls: ['./workflow-diagram.component.css'],
})
export class WorkflowDiagramComponent {
  @ViewChild('graphContainer') graphContainer!: ElementRef;
  ngAfterViewInit() {
    const graph = new mxGraph(this.graphContainer.nativeElement);
    try {
      const parent = graph.getDefaultParent();
      graph.getModel().beginUpdate();
      //Creating Shapes
      const vertex1 = graph.insertVertex(parent, null, 'Statistican:Add Dashboards', 150, 500, 200, 80, "fillColor=#0d99ff;fontColor=#fff;rounded=1")
      const vertex2 = graph.insertVertex(parent, null, 'Reviewer 1', 120, 180, 200, 80, "fillColor=#8f88cc;fontColor=#fff;rounded=1");
      const vertex3 = graph.insertVertex(parent, null, 'Reviewer 1:Reject DSD', 0, 0, 200, 80, "fillColor=#8f88cc;fontColor=#fff;rounded=1");
      const vertex4 = graph.insertVertex(parent, null, 'Data Review', 100, 100, 100, 100, "fillColor=#8f88cc;fontColor=#fff;shape=rhombus");
      const vertex5 = graph.insertVertex(parent, null, 'Reviewer 1:Accept DSD', 0, 0, 200, 80, "fillColor=#8f88cc;fontColor=#fff;rounded=1");
      const vertex6 = graph.insertVertex(parent, null, 'Reviewer 2', 0, 0, 200, 80, "fillColor=#3aad49;fontColor=#fff;rounded=1");
      const vertex7 = graph.insertVertex(parent, null, 'Data Review', 100, 100, 100, 100, "fillColor=#3aad49;fontColor=#fff;shape=rhombus");
      const vertex8 = graph.insertVertex(parent, null, 'Reviewer 2:Reject DSD', 0, 0, 200, 80, "fillColor=#3aad49;fontColor=#fff;rounded=1");
      const vertex9 = graph.insertVertex(parent, null, 'Reviewer 2:Accept DSD', 0, 0, 200, 80, "fillColor=#3aad49;fontColor=#fff;rounded=1");
      const vertex10 = graph.insertVertex(parent, null, 'Subject Manager', 0, 0, 200, 80, "fillColor=#3e62a9;fontColor=#fff;rounded=1");
      const vertex11 = graph.insertVertex(parent, null, 'Final Approval', 100, 100, 100, 100, "fillColor=#3e62a9;fontColor=#fff;shape=rhombus");
      const vertex12 = graph.insertVertex(parent, null, 'Subject Manager: Accept DSD', 0, 0, 200, 80, "fillColor=#3e62a9;fontColor=#fff;rounded=1");
      const vertex13 = graph.insertVertex(parent, null, 'Subject Manager: Reject DSD', 0, 0, 200, 80, "fillColor=#3e62a9;fontColor=#fff;rounded=1");
      const vertex14 = graph.insertVertex(parent, null, 'Subject Manager: Publish DSD', 0, 0, 200, 80, "fillColor=#3e62a9;fontColor=#fff;rounded=1");
      //Creating parent child realtionship
      graph.insertEdge(parent, null, null, vertex1, vertex2);
      graph.insertEdge(parent, null, null, vertex2, vertex4);
      graph.insertEdge(parent, null, 'Request Modification', vertex3, vertex1);
      graph.insertEdge(parent, null, 'Accept', vertex4, vertex5);
      graph.insertEdge(parent, null, 'Reject', vertex4, vertex3);
      graph.insertEdge(parent, null, null, vertex5, vertex6);
      graph.insertEdge(parent, null, null, vertex6, vertex7);
      graph.insertEdge(parent, null, 'Request Modification', vertex8, vertex4);
      graph.insertEdge(parent, null, 'Accept', vertex7, vertex9);
      graph.insertEdge(parent, null, 'Reject', vertex7, vertex8);
      graph.insertEdge(parent, null, null, vertex9, vertex10);
      graph.insertEdge(parent, null, null, vertex10, vertex11);
      graph.insertEdge(parent, null, null, vertex11, vertex12);
      graph.insertEdge(parent, null, 'Request Modification', vertex13, vertex4);
      graph.insertEdge(parent, null, 'Accept', vertex12, vertex14);
      graph.insertEdge(parent, null, 'Reject', vertex11, vertex13);
    } finally {
      graph.getModel().endUpdate();
      new mxHierarchicalLayout(graph).execute(graph.getDefaultParent());
    }
  }
}