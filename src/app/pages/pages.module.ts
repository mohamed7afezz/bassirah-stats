import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  NgbToastModule, NgbProgressbarModule
} from '@ng-bootstrap/ng-bootstrap';

import { FlatpickrModule } from 'angularx-flatpickr';
import { CountUpModule } from 'ngx-countup';
import { NgApexchartsModule } from 'ng-apexcharts';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { SimplebarAngularModule } from 'simplebar-angular';

// Swiper Slider
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { LightboxModule } from 'ngx-lightbox';

// Load Icons
import { defineElement } from "@lordicon/element";
import lottie from 'lottie-web';

// Pages Routing
import { PagesRoutingModule } from "./pages-routing.module";
import { SharedModule } from "../shared/shared.module";
import { WidgetModule } from '../shared/widget/widget.module';
import { DashboardComponent } from './dashboards/dashboard/dashboard.component';
import { ToastsContainer } from './dashboards/dashboard/toasts-container.component';
import { DashboardsModule } from "./dashboards/dashboards.module";
import { AppsModule } from "./apps/apps.module";
import { EcommerceModule } from "./ecommerce/ecommerce.module";
import { Indicator360Component } from "./indicator360/indicator360.component";
import { ProcessManagementComponent } from './process-management/process-management.component'; 
import { CollaborationComponent } from './collaboration/collaboration.component';
import { IndicatorDataDocumentationComponent } from './collaboration/indicator-data-documentation/indicator-data-documentation.component';
import { UserLogsComponent } from './collaboration/user-logs/user-logs.component';
import { DataAnalyticsComponent } from './data-analytics/data-analytics.component';
import { StatisticalDataMartComponent } from './statistical-data-mart/statistical-data-mart.component';
import { DataVisualizationComponent } from './data-visualization/data-visualization.component';
import { WorkflowModuleComponent } from './workflow-module/workflow-module.component';
import { CreateApproveCycleComponent } from "./workflow-module/create-approve-cycle/create-approve-cycle.component";
import { CreateWorkflowComponent } from "./workflow-module/create-workflow/create-workflow.component";
import { DataWranglingComponent } from './data-wrangling/data-wrangling.component';
import { GrossDomesticProductComponent } from './indicator360/Indicators/gross-domestic-product/gross-domestic-product.component';
import { EconomicStatisticsComponent } from './process-management/Statistics/economic-statistics/economic-statistics.component';
import { DashboardsStatisticsComponent } from './process-management/Statistics/dashboards-statistics/dashboards-statistics.component';
import { AdministrationComponent  } from "./administration/administration.component";


@NgModule({
  declarations: [
    DashboardComponent,
    ToastsContainer
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbToastModule,
    NgbProgressbarModule,
    FlatpickrModule.forRoot(),
    CountUpModule,
    NgApexchartsModule,
    LeafletModule,
    NgbDropdownModule,
    SimplebarAngularModule,
    PagesRoutingModule,
    SharedModule,
    WidgetModule,
    SlickCarouselModule,
    LightboxModule,
    DashboardsModule,
    AppsModule,
    EcommerceModule,
    Indicator360Component,
    ProcessManagementComponent,
    CollaborationComponent,
    IndicatorDataDocumentationComponent,
    UserLogsComponent,

    DataAnalyticsComponent,
    StatisticalDataMartComponent,
    DataVisualizationComponent,

    WorkflowModuleComponent,
    CreateApproveCycleComponent,
    CreateWorkflowComponent,

    DataWranglingComponent,
    GrossDomesticProductComponent,
    EconomicStatisticsComponent,
    DashboardsStatisticsComponent,
      AdministrationComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PagesModule {
  constructor() {
    defineElement(lottie.loadAnimation);
  }
}
