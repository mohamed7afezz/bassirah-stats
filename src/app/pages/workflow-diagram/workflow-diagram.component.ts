import { Component, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { dia, ui, shapes } from 'jointjs-plus';

@Component({
    selector: 'app-workflow-diagram',
    standalone: true,
    imports: [],
    templateUrl: './workflow-diagram.component.html',
    styleUrls: ['./workflow-diagram.component.scss'],
})
export class WorkflowDiagramComponent implements OnInit, AfterViewInit {
    @ViewChild('canvas') canvas: ElementRef;

    private graph: dia.Graph;
    private paper: dia.Paper;
    private scroller: ui.PaperScroller;

    ngOnInit() {
        const graph = this.graph = new dia.Graph({}, { cellNamespace: shapes });
        const paper = this.paper = new dia.Paper({
            height: 2000,
            width: 2000,
            gridSize: 40,
            drawGrid: true,
            model: graph,
            background: {
                color: '#f8f9fA',
            },
            frozen: true,
            async: true,
            sorting: dia.Paper.sorting.APPROX,
            cellViewNamespace: shapes,
        });

        const scroller = this.scroller = new ui.PaperScroller({
            paper: paper,
            autoResize: true,
            cursor: 'grab',
        });

        scroller.render();

        this.iniatlizeGraphData(graph);
    }

    ngAfterViewInit() {
        const { scroller, paper, canvas } = this;
        canvas.nativeElement.appendChild(this.scroller.el);
        scroller.center();
        paper.unfreeze();
        scroller.el.scrollLeft = 0;
        scroller.el.scrollTop = 0;
        const paperElement = this.canvas.nativeElement.querySelector('.joint-paper');
        if (paperElement) {
            paperElement.style.left = '0';
            paperElement.style.top = '0';
        }
    
        // Set the width and height of the .paper-scroller-background element
        const paperScrollerBackground = this.canvas.nativeElement.querySelector('.paper-scroller-background');
        if (paperScrollerBackground) {
            paperScrollerBackground.style.width = '2000px';
            paperScrollerBackground.style.height = '2000px';
        }

    }

    iniatlizeGraphData(graph: dia.Graph) {
        // Statistician (Top Level)
        const vertex1 = new shapes.standard.Rectangle({
            position: { x: 400, y: 50 }, // Centered at the top
            size: { width: 200, height: 80 },
            attrs: {
                body: { fill: '#0d99ff', rx: 5, ry: 5 },
                label: { text: 'Statistician: Add Dashboards', fill: '#fff' }
            }
        });

        // Center
        const vertex2 = new shapes.standard.Rectangle({
            position: { x: 600, y: 200 },
            size: { width: 200, height: 80 },
            attrs: {
                body: { fill: '#8f88cc', rx: 5, ry: 5 },
                label: { text: 'Reviewer 1', fill: '#fff' }
            }
        });

        const vertex5 = new shapes.standard.Rectangle({
            position: { x: 600, y: 350 }, // Center
            size: { width: 200, height: 80 },
            attrs: {
                body: { fill: '#8f88cc', rx: 5, ry: 5 },
                label: { text: 'Reviewer 1: Accept DSD', fill: '#fff' }
            }
        });

        const vertex8 = new shapes.standard.Rectangle({
            position: { x: 600, y: 500 }, // Right side
            size: { width: 200, height: 80 },
            attrs: {
                body: { fill: '#3aad49', rx: 5, ry: 5 },
                label: { text: 'Reviewer 2: Reject DSD', fill: '#fff' }
            }
        });

        // Left Side
        const vertex3 = new shapes.standard.Rectangle({
            position: { x: 100, y: 200 },
            size: { width: 200, height: 80 },
            attrs: {
                body: { fill: '#8f88cc', rx: 5, ry: 5 },
                label: { text: 'Reviewer 1: Reject DSD', fill: '#fff' }
            }
        });

        const vertex4 = new shapes.standard.Rectangle({
            position: { x: 100, y: 400 },
            size: { width: 200, height: 80 },
            attrs: {
                body: { fill: '#8f88cc', rx: 5, ry: 5 },
                label: { text: 'Data Review', fill: '#fff' }
            }
        });

        const vertex13 = new shapes.standard.Rectangle({
            position: { x: 100, y: 1100 },
            size: { width: 200, height: 80 },
            attrs: {
                body: { fill: '#3e62a9', rx: 5, ry: 5 },
                label: { text: 'Subject Manager: Reject DSD', fill: '#fff' }
            }
        });

        // Right Side
        const vertex6 = new shapes.standard.Rectangle({
            position: { x: 1200, y: 350 },
            size: { width: 200, height: 80 },
            attrs: {
                body: { fill: '#3aad49', rx: 5, ry: 5 },
                label: { text: 'Reviewer 2', fill: '#fff' }
            }
        });

        const vertex7 = new shapes.standard.Rectangle({
            position: { x: 1200, y: 500 },
            size: { width: 200, height: 80 },
            attrs: {
                body: { fill: '#3aad49', rx: 5, ry: 5 },
                label: { text: 'Data Review', fill: '#fff' }
            }
        });

        const vertex9 = new shapes.standard.Rectangle({
            position: { x: 1200, y: 700 },
            size: { width: 200, height: 80 },
            attrs: {
                body: { fill: '#3aad49', rx: 5, ry: 5 },
                label: { text: 'Reviewer 2: Accept DSD', fill: '#fff' }
            }
        });

        const vertex10 = new shapes.standard.Rectangle({
            position: { x: 1200, y: 850 },
            size: { width: 200, height: 80 },
            attrs: {
                body: { fill: '#3e62a9', rx: 5, ry: 5 },
                label: { text: 'Subject Manager', fill: '#fff' }
            }
        });

        const vertex11 = new shapes.standard.Rectangle({
            position: { x: 1200, y: 1100 },
            size: { width: 200, height: 80 },
            attrs: {
                body: { fill: '#3e62a9', rx: 5, ry: 5 },
                label: { text: 'Final Approval', fill: '#fff' }
            }
        });

        const vertex12 = new shapes.standard.Rectangle({
            position: { x: 1200, y: 1300 },
            size: { width: 200, height: 80 },
            attrs: {
                body: { fill: '#3e62a9', rx: 5, ry: 5 },
                label: { text: 'Subject Manager: Accept DSD', fill: '#fff' }
            }
        });

        const vertex14 = new shapes.standard.Rectangle({
            position: { x: 1200, y: 1600 },
            size: { width: 200, height: 80 },
            attrs: {
                body: { fill: '#3e62a9', rx: 5, ry: 5 },
                label: { text: 'Subject Manager: Publish DSD', fill: '#fff' }
            }
        });

        // Add vertices to the graph
        graph.addCells([vertex1, vertex2, vertex3, vertex4, vertex5, vertex6, vertex7, vertex8, vertex9, vertex10, vertex11, vertex12, vertex13, vertex14]);


        // Create edges (links)
        const edge1 = new shapes.standard.Link({
            source: { id: vertex1.id },
            target: { id: vertex2.id }
        });

        const edge2 = new shapes.standard.Link({
            source: { id: vertex2.id },
            target: { id: vertex4.id }
        });

        const edge3 = new shapes.standard.Link({
            source: { id: vertex3.id },
            target: { id: vertex1.id },
            labels: [{ attrs: { text: { text: 'Request Modification' } } }]
        });

        const edge4 = new shapes.standard.Link({
            source: { id: vertex4.id },
            target: { id: vertex5.id },
            labels: [{ attrs: { text: { text: 'Accept' } } }]
        });

        const edge5 = new shapes.standard.Link({
            source: { id: vertex4.id },
            target: { id: vertex3.id },
            labels: [{ attrs: { text: { text: 'Reject' } } }]
        });

        const edge6 = new shapes.standard.Link({
            source: { id: vertex5.id },
            target: { id: vertex6.id }
        });

        const edge7 = new shapes.standard.Link({
            source: { id: vertex6.id },
            target: { id: vertex7.id }
        });

        const edge8 = new shapes.standard.Link({
            source: { id: vertex8.id },
            target: { id: vertex4.id },
            labels: [{ attrs: { text: { text: 'Request Modification' } } }]
        });

        const edge9 = new shapes.standard.Link({
            source: { id: vertex7.id },
            target: { id: vertex9.id },
            labels: [{ attrs: { text: { text: 'Accept' } } }]
        });

        const edge10 = new shapes.standard.Link({
            source: { id: vertex7.id },
            target: { id: vertex8.id },
            labels: [{ attrs: { text: { text: 'Reject' } } }]
        });

        const edge11 = new shapes.standard.Link({
            source: { id: vertex9.id },
            target: { id: vertex10.id }
        });

        const edge12 = new shapes.standard.Link({
            source: { id: vertex10.id },
            target: { id: vertex11.id }
        });

        const edge13 = new shapes.standard.Link({
            source: { id: vertex11.id },
            target: { id: vertex12.id }
        });

        const edge14 = new shapes.standard.Link({
            source: { id: vertex13.id },
            target: { id: vertex4.id },
            labels: [{ attrs: { text: { text: 'Request Modification' } } }]
        });

        const edge15 = new shapes.standard.Link({
            source: { id: vertex12.id },
            target: { id: vertex14.id },
            labels: [{ attrs: { text: { text: 'Accept' } } }]
        });

        const edge16 = new shapes.standard.Link({
            source: { id: vertex11.id },
            target: { id: vertex13.id },
            labels: [{ attrs: { text: { text: 'Reject' } } }]
        });

        // Add edges to the graph
        graph.addCells([edge1, edge2, edge3, edge4, edge5, edge6, edge7, edge8, edge9, edge10, edge11, edge12, edge13, edge14, edge15, edge16]);

    }

}