import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-data-wrangling',
  standalone: true,
  imports: [],
  templateUrl: './data-wrangling.component.html',
  styleUrl: './data-wrangling.component.scss'
})
export class DataWranglingComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const iframe = document.getElementById('stat-metabase') as HTMLIFrameElement;

    if (iframe) {
      iframe.onload = () => {
        const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;

        if (iframeDoc) {
          const script = iframeDoc.createElement("script");
          script.textContent = `
            window.onload = function() {
              setTimeout(function() {
                document.querySelector('input[name="username"]').value = "admin@bassirah.local";
                document.querySelector('input[name="password"]').value = "UO678gf4oui0yQEt"; 
                document.querySelector('button[type="submit"]').click();
              }, 10000);
                
            }
          `;
          iframeDoc.head.appendChild(script);
        }
      };
    }
  }
}
