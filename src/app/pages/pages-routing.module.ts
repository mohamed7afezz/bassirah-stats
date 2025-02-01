import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Indicator360Component } from "./indicator360/indicator360.component"; // Import the component
import { ProcessManagementComponent } from './process-management/process-management.component'; 
import { CollaborationComponent } from './collaboration/collaboration.component';
import { DataAnalyticsComponent } from './data-analytics/data-analytics.component';
import { StatisticalDataMartComponent } from './statistical-data-mart/statistical-data-mart.component';
import { DataVisualizationComponent } from './data-visualization/data-visualization.component';
import { WorkflowModuleComponent } from './workflow-module/workflow-module.component';
import { DataWranglingComponent } from './data-wrangling/data-wrangling.component';
// Indecators
import { GrossDomesticProductComponent } from './indicator360/Indicators/gross-domestic-product/gross-domestic-product.component';
import { EconomicStatisticsComponent } from './process-management/Statistics/economic-statistics/economic-statistics.component';
import { DashboardsStatisticsComponent } from './process-management/Statistics/dashboards-statistics/dashboards-statistics.component';
// Component pages
import { DashboardComponent } from "./dashboards/dashboard/dashboard.component";

const routes: Routes = [
    {
      path: 'indicator360', component: Indicator360Component 
    },
    {
      path: 'process_management', component: ProcessManagementComponent 
    },
    {
      path: 'economic-statistics', component: EconomicStatisticsComponent
    },
    {
      path: 'economic-statistics/dashboards-statistics', component: DashboardsStatisticsComponent
    },
    {
      path: 'collaboration', component: CollaborationComponent 
    },
    {
      path: 'data_analytics', component: DataAnalyticsComponent 
    },
    {
      path: 'statistical_data_mart', component: StatisticalDataMartComponent 
    },
    {
      path: 'data_visualization', component: DataVisualizationComponent 
    },
    {
      path: 'workflow', component: WorkflowModuleComponent 
    },
    {
      path: 'data_wrangling', component: DataWranglingComponent 
    },
    {
      path: 'indicator360/gross-domestic-product', component: GrossDomesticProductComponent
    },
    {
        path: "",
        component: DashboardComponent
    },
    {
      path: '', loadChildren: () => import('./dashboards/dashboards.module').then(m => m.DashboardsModule)
    },
    {
      path: 'apps', loadChildren: () => import('./apps/apps.module').then(m => m.AppsModule)
    },
    {
      path: 'ecommerce', loadChildren: () => import('./ecommerce/ecommerce.module').then(m => m.EcommerceModule)
    },
    {
      path: 'projects', loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule)
    },
    {
      path: 'tasks', loadChildren: () => import('./tasks/tasks.module').then(m => m.TasksModule)
    },
    {
      path: 'crm', loadChildren: () => import('./crm/crm.module').then(m => m.CrmModule)
    },
    {
      path: 'crypto', loadChildren: () => import('./crypto/crypto.module').then(m => m.CryptoModule)
    },
    {
      path: 'invoices', loadChildren: () => import('./invoices/invoices.module').then(m => m.InvoicesModule)
    },
    {
      path: 'tickets', loadChildren: () => import('./tickets/tickets.module').then(m => m.TicketsModule)
    },
    {
      path: 'pages', loadChildren: () => import('./extrapages/extraspages.module').then(m => m.ExtraspagesModule)
    },
    { path: 'ui', loadChildren: () => import('./ui/ui.module').then(m => m.UiModule) },
    {
      path: 'advance-ui', loadChildren: () => import('./advance-ui/advance-ui.module').then(m => m.AdvanceUiModule)
    },
    {
      path: 'forms', loadChildren: () => import('./form/form.module').then(m => m.FormModule)
    },
    {
      path: 'tables', loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule)
    },
    {
      path: 'charts', loadChildren: () => import('./charts/charts.module').then(m => m.ChartsModule)
    },
    {
      path: 'icons', loadChildren: () => import('./icons/icons.module').then(m => m.IconsModule)
    },
    {
      path: 'maps', loadChildren: () => import('./maps/maps.module').then(m => m.MapsModule)
    },
    {
      path: 'marletplace', loadChildren: () => import('./nft-marketplace/nft-marketplace.module').then(m => m.NftMarketplaceModule)
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
