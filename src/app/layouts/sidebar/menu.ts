import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    id: 200,
    label: 'MENUITEMS.INDICATOR360.TEXT',
    icon: 'ri-search-eye-line',
    link: '/indicator360',
    permission: 'INDICATOR360.VIEW',
  },
  {
    id: 201,
    label: 'MENUITEMS.PROCESS_MANAGEMENT.TEXT',
    icon: 'ri-booklet-line',
    isCollapsed: true,
    permission: 'PROCESS_MANAGEMENT.VIEW',
    subItems: [
      {
        id: 210,
        label: 'MENUITEMS.ECONOMIC_STATISTICS.TEXT',
        link: '/economic-statistics',
        parentId: 201
      },
      {
        id: 211,
        label: 'MENUITEMS.SOCIAL_STATISTICS.TEXT',
        link: '/social-statistics',
        parentId: 201
      },
      {
        id: 211,
        label: 'MENUITEMS.SPATIAL_RESOURCES_STATISTICS.TEXT',
        link: '/spatial-resources-statistics',
        parentId: 201
      },
    ]
  },
  {
    id: 202,
    label: 'MENUITEMS.DATA_VISUALIZATION.TEXT',
    icon: 'ri-table-fill',//ri-line-chart-fill',
    link: '/data_visualization',
    permission: 'DATA_VISUALIZATION.VIEW',
  },
  {
    id: 203,
    label: 'MENUITEMS.STATISTICAL_DATA_MART.TEXT',
    icon: 'ri-shopping-cart-line',
    link: '/statistical_data_mart',
    permission: 'STATISTICAL_DATA_MART.VIEW'
  },
  {
    id: 204,
    label: 'MENUITEMS.DATA_WRANGLING.TEXT',
    icon: 'ri-tools-fill',
    link: '/data_wrangling',
    permission: 'DATA_WRANGLING.VIEW'
  },
  {
    id: 205,
    label: 'MENUITEMS.DATA_ANALYTICS.TEXT',
    icon: 'ri-speak-fill',
    link: '/data_analytics',
    permission: 'DATA_ANALYTICS.VIEW'
  },
  {
    id: 300,
    label: 'MENUITEMS.WORKFLOW.TEXT',
    icon: 'ri-flow-chart',
    link: '/workflow',
    permission: 'WORKFLOW.VIEW',
    subItems: [
      {
        id: 301,
        label: 'MENUITEMS.WORKFLOW.CAC',
        link: 'workflow/create-approve-cycle',
        parentId: 201
      },
      {
        id: 302,
        label: 'MENUITEMS.WORKFLOW.CW',
        link: 'workflow/create-workflow',
        parentId: 201
      }
    ]
  },
  {
    id: 207,
    label: 'MENUITEMS.COLLABORATION.TEXT',
    icon: 'ri-message-2-fill',
    isCollapsed: true,
    permission: 'COLLABORATION.VIEW',
    subItems: [
      {
        id: 208,
        label: 'MENUITEMS.COLLABORATION.ITEM',
        link: 'collaboration/indicator-data-documentation',
        parentId: 8
      },{
        id: 208,
        label: 'MENUITEMS.COLLABORATION.ITEM2',
        link: 'collaboration/user-logs',
        parentId: 8
      },
      {
        id: 9,
        label: 'MENUITEMS.APPS.LIST.CALENDAR',
        isCollapsed: true,
        parentId: 8,
        subItems: [
          {
            id: 9,
            label: 'MENUITEMS.APPS.LIST.MAINCALENDAR',
            link: '/calendar',
          },
          {
            id: 9,
            label: 'MENUITEMS.APPS.LIST.MONTHGRID',
            link: '/month-grid',
          }
        ]
      },

      {
        id: 10,
        label: 'MENUITEMS.APPS.LIST.CHAT',
        link: '/chat',
        parentId: 8
      },
      {
        id: 11,
        label: 'MENUITEMS.APPS.LIST.EMAIL',
        parentId: 8,
        subItems: [
          {
            id: 13,
            label: 'MENUITEMS.APPS.LIST.MAILBOX',
            link: '/mailbox',
            parentId: 11
          }
        ]
      }
    ]
  },
  {
    id: 400,
    label: 'MENUITEMS.ADMINISTRATION.TEXT',
    icon: 'ri-admin-fill',
    link: '/administration',
    permission: 'ADMINISTRATION.VIEW'
  },
];
