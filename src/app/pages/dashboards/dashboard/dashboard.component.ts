import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ToastService } from './toast-service';

import { circle, latLng, tileLayer } from 'leaflet';

import { ChartType } from './dashboard.model';
import { BestSelling, Recentelling, TopSelling, statData } from 'src/app/core/data';
import { SalesCategoryChart, revenueChart } from 'src/app/shared/chartColor';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

/**
 * Ecommerce Component
 */
export class DashboardComponent implements OnInit {

  // Recent Active logs
  activityItems: { activity: string, icon: string, classes: string, date: string }[] = []; // Array to store activity items with updated dates
  TopHistoricalPublication!: any;
  MainAuthors!: any;
  // bread crumb items
  breadCrumbItems!: Array<{}>;
  analyticsChart!: ChartType;
  BestSelling: any;
  TopSelling: any;
  Recentelling: any;
  SalesCategoryChart!: ChartType;
  statData!: any;
  TopIndicators: any;
  currentDate: any;
  themeColorMap: any;
  // Current Date
  // currentDate: Date = new Date();

  constructor(public toastService: ToastService) {
    var date = new Date();
    var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    this.currentDate = { from: firstDay, to: lastDay }

    // Initialize activity items with placeholder dates
    this.activityItems = [
      { activity: 'Log In', icon: "ri-login-box-line", classes: "bg-success-subtle text-success", date: '02:14 PM Today' },
      { activity: 'Checking Messages', icon: "ri-stack-fill", classes: "bg-danger-subtle text-danger", date: '9:47 PM Yesterday' },
      { activity: 'Browsing Data Mart "GDP Indicator"', icon: "ri-global-line", classes: "bg-dark-subtle text-dark ", date: '9:47 PM Yesterday' },
      { activity: 'Connecting to Staging Database', icon: "ri-database-2-line", classes: "bg-info-subtle text-info ", date: '25 Nov, 2021' },
      { activity: 'Executing Query#3521 on tables "Consumption" & "Prices"', icon: "mdi mdi-sale fs-14", classes: "bg-secondary", date: '22 Oct, 2021' },
      { activity: 'Creating Data Model "Consumption"', icon: "ri-line-chart-line", classes: "bg-warning-subtle text-warning", date: '15 Oct' },
      { activity: 'Commenting on "Add API" Workflow Case#325', icon: "ri-links-fill", classes: "text-white bg-primary ", date: '22 Oct, 2021' },
      { activity: 'Publishing Dashboard "Price Index"',  icon: "ri-article-line", classes: "bg-warning ", date: '22 Oct, 2021' },
      { activity: 'Adding Indicator "Life Expectancy at Birth" to Watch List', icon: "ri-image-add-line", classes: "bg-success-subtle text-success", date: '22 Oct, 2021' }
    ];

     // Ensure Login is 12 hours after LogsFrom
    const logsFrom = new Date();
    const loginDate = new Date(logsFrom.getTime() - 24 * 60 * 60 * 1000);
    const logsTo = new Date();
    const logoutDate = new Date();

    this.activityItems = this.activityItems.map((item, index) => {
      if (index === 0) {
        return { ...item, date: this.formatDate(loginDate) };
      } else if (index === this.activityItems.length - 1) {
        return { ...item, date: this.formatDate(logoutDate) };
      } else {
        return { ...item, date: this.getRandomDate(loginDate, logoutDate) };
      }
    });
  }


  ngOnInit(): void {
    /**
     * BreadCrumb
     */
    this.breadCrumbItems = [
      { label: 'Dashboards' },
      { label: 'Dashboard', active: true }
    ];

    if (sessionStorage.getItem('toast')) {
      this.toastService.show('Logged in Successfull.', { classname: 'bg-success text-center text-white', delay: 5000 });
      sessionStorage.removeItem('toast');
    }

    /**
    * Fetches the data
    */
    this.fetchData();

    // Chart Color Data Get Function
    this._analyticsChart('["--vz-primary", "--vz-success", "--vz-danger"]');
    this._SalesCategoryChart('["--vz-primary", "--vz-success", "--vz-warning", "--vz-danger", "--vz-info"]');
  }

  formatDate(date: Date): string {
    return date.toLocaleString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  }

   // Method to generate a random date between two dates
  getRandomDate(start: Date, end: Date): string {
    const randomTimestamp = start.getTime() + Math.random() * (end.getTime() - start.getTime());
    const randomDate = new Date(randomTimestamp);
    return this.formatDate(randomDate);
  }

  num: number = 0;
  option = {
    startVal: this.num,
    useEasing: true,
    duration: 2,
    decimalPlaces: 2,
  };



  // Chart Colors Set
  private getChartColorsArray(colors: any) {
    colors = JSON.parse(colors);
    return colors.map(function (value: any) {
      var newValue = value.replace(" ", "");
      if (newValue.indexOf(",") === -1) {
        var color = getComputedStyle(document.documentElement).getPropertyValue(newValue);
        if (color) {
          color = color.replace(" ", "");
          return color;
        }
        else return newValue;;
      } else {
        var val = value.split(',');
        if (val.length == 2) {
          var rgbaColor = getComputedStyle(document.documentElement).getPropertyValue(val[0]);
          rgbaColor = "rgba(" + rgbaColor + "," + val[1] + ")";
          return rgbaColor;
        } else {
          return newValue;
        }
      }
    });
  }

  /**
 * Sales Analytics Chart
 */
  setrevenuevalue(value: any) {
    if (value == 'all') {
      this.analyticsChart.series = [{
        name: 'Number of Publications',
        type: 'area',
        data: [5, 19, 20, 11, 18, 14, 24, 12, 6, 5, 15, 22]
      }, {
        name: 'Web Interactions',
        type: 'bar',
        data: [613, 1275, 616, 1420, 1066, 1410, 813, 1450, 972, 797, 1269, 1329]
      }, {
        name: 'Data Requests',
        type: 'line',
        data: [187, 145, 190, 154, 45, 79, 47, 145, 90, 134, 166, 48]
      }]
    }
    if (value == '1M') {
      this.analyticsChart.series = [{
        name: 'Number of Publications',
        type: 'area',
        data: [19, 13, 15, 7, 13, 18, 21, 11, 12, 23, 12, 23]
      }, {
        name: 'Web Interactions',
        type: 'bar',
        data: [390, 380, 688, 538, 317, 448, 349, 597, 307, 213, 340, 401]
      }, {
        name: 'Data Requests',
        type: 'line',
        data: [76, 155, 182, 116, 87, 83, 61, 151, 31, 69, 110, 166]
      }]
    }
    if (value == '6M') {
      this.analyticsChart.series = [{
        name: 'Number of Publications',
        type: 'area',
        data: [9, 10, 14, 19, 12, 15, 8, 19, 24, 15, 9, 5]
      }, {
        name: 'Web Interactions',
        type: 'bar',
        data: [849, 1031, 1455, 1115, 1213, 758, 1205, 1229, 1015, 877, 1020, 621]
      }, {
        name: 'Data Requests',
        type: 'line',
        data: [103, 87, 174, 190, 163, 106, 114, 64, 37, 55, 187, 126]
      }]
    }
    if (value == '1Y') {
      this.analyticsChart.series = [{
        name: 'Number of Publications',
        type: 'area',
        data: [46, 41, 34, 40, 27, 26, 6, 16, 45, 17, 42, 46]
      }, {
        name: 'Web Interactions',
        type: 'bar',
        data: [781, 742, 1412, 967, 1084, 1411, 673, 1248, 1233, 1170, 1026, 820]
      }, {
        name: 'Data Requests',
        type: 'line',
        data: [51, 144, 105, 180, 79, 54, 158, 78, 66, 54, 60, 32]
      }]
    }

  }

  private _analyticsChart(colors: any) {
    colors = this.getChartColorsArray(colors);
    this.analyticsChart = {
      chart: {
        height: 370,
        type: "line",
        toolbar: {
          show: false,
        },
        style: {
          direction: 'rtl'
        }
      },
      stroke: {
        curve: "straight",
        dashArray: [0, 0, 8],
        width: [2, 0, 2.2],
      },
      colors: colors,
      series: [{
        name: 'Number of Publications',
        type: 'area',
        data: [40, 29, 21, 18, 39, 30, 28, 33, 38, 30, 36, 20]
      }, {
        name: 'Web Interactions',
        type: 'bar',
        data: [1441, 1151, 1333, 1440, 1422, 1117, 1258, 645, 1201, 682, 1290, 1176]
      }, {
        name: 'Data Requests',
        type: 'line',
        data: [52, 163, 166, 163, 56, 153, 33, 37, 101, 172, 112, 184]
      }],
      fill: {
        opacity: [0.1, 0.9, 1],
      },
      labels: ['01/01/2024', '02/01/2024', '03/01/2024', '04/01/2024', '05/01/2024', '06/01/2024', '07/01/2024', '08/01/2024', '09/01/2024', '10/01/2024', '11/01/2024'],
      markers: {
        size: [0, 0, 0],
        strokeWidth: 2,
        hover: {
          size: 4,
        },
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
      },
      grid: {
        show: true,
        xaxis: {
          lines: {
            show: true,
          },
        },
        yaxis: {
          lines: {
            show: false,
          },
        },
        padding: {
          top: 0,
          right: -2,
          bottom: 15,
          left: 10,
        },
      },
      legend: {
        show: true,
        horizontalAlign: "center",
        offsetX: 0,
        offsetY: -5,
        markers: {
          width: 9,
          height: 9,
          radius: 6,
        },
        itemMargin: {
          horizontal: 10,
          vertical: 0,
        },
      },
      plotOptions: {
        bar: {
          columnWidth: "30%",
          barHeight: "70%",
        },
      },
    };

    const attributeToMonitor = 'data-theme';

    const observer = new MutationObserver(() => {
      const currentTheme = document.documentElement.getAttribute(attributeToMonitor);
      console.log(revenueChart(currentTheme))
      this._analyticsChart(revenueChart(currentTheme));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: [attributeToMonitor]
    });
  }

  /**
 *  Sales Category
 */
  private _SalesCategoryChart(colors: any) {
    colors = this.getChartColorsArray(colors);
    this.SalesCategoryChart = {
      series: [44, 55, 41, 17, 15],
      labels: ["Ministry of Economy and Planning", "Ministry of Commerce", "Ministry of Culture", "Ministry of Finance", "Ministry of Hajj and Umrah"],
      chart: {
        height: 333,
        type: "donut",
      },
      legend: {
        position: "bottom",
      },
      stroke: {
        show: false
      },
      dataLabels: {
        dropShadow: {
          enabled: false,
        },
      },
      colors: colors
    };
    const attributeToMonitor = 'data-theme';

    const observer = new MutationObserver(() => {
      const currentTheme = document.documentElement.getAttribute(attributeToMonitor);
      this._SalesCategoryChart(SalesCategoryChart(currentTheme));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: [attributeToMonitor]
    });
  }

  /**
  * Fetches the data
  */
  private fetchData() {
    this.BestSelling = BestSelling;
    this.TopSelling = TopSelling;
    this.Recentelling =  [
      {
          id: "#VZ2112",
          image: "assets/images/users/avatar-1.jpg",
          statistician: 'Khalid Mohammed',
          workflow: 'Add Tables',
          date: '2/01/2025',
          department: 'Economic Statistics Department',
          status: 'Pending Approval'
      },
      {
          id: "#VZ2111",
          image: "assets/images/users/avatar-2.jpg",
          statistician: 'Hkim Mohammed',
          workflow: 'Add Dashboard',
          date: '2/18/2025',
          department: 'Social Statistics department',
          status: 'Approved'
      },
      {
          id: "#VZ2109",
          image: "assets/images/users/avatar-3.jpg",
          statistician: 'Ziaad El Mahmoudy',
          workflow: 'Add API',
          date: '1/05/2025',
          department: 'Spatial and Resources Statistics department',
          status: 'Rejected for Review'
      },    
      {
          id: "#VZ2108",
          image: "assets/images/users/avatar-4.jpg",
          statistician: 'Abdallah Dahshan',
          workflow: 'Add Dashboard',
          date: '2/08/2025',
          department: 'Social Statistics department',
          status: 'Approved'
      },   
      {
          id: "#VZ2107",
          image: "assets/images/users/avatar-6.jpg",
          statistician: 'Fahed ben Ibarahim',
          workflow: 'Add API',
          date: '12/18/2024',
          department: 'Economic Statistics Department',
          status: 'Pending Approval'
      } 
  ];
    // this.statData = statData;

    this.TopHistoricalPublication = [
      {
          PDFName: "GDP and National Accounts Third Quarter of 2024 ",
          PDFURL: "https://www.stats.gov.sa/documents/20117/2066979/GDP+Q3+2024E.pdf/ba18c364-5b40-4a44-008e-eefa3afb47ac?t=1735210804090",
          year: '2024',
          quarter: 'Third (3)',
      },
      {
          PDFName: "GDP and National Accounts Second Quarter of 2024",
          PDFURL: "https://www.stats.gov.sa/documents/20117/2066979/GDP+Q2+2024E_V3.pdf/381e5bde-c938-2348-7e3c-45e4c717e340?t=1735209598077",
          year: '2024',
          quarter: 'Second (2)',
      },
      {
          PDFName: "GDP and National Accounts First Quarter of 2024",
          PDFURL: "https://www.stats.gov.sa/documents/20117/2066979/GDP+Q1+2024E_0.pdf/0049703b-72cf-7d71-c16e-df666e95a21b?t=1735209658624",
          year: '2024',
          quarter: 'First (1)',
      },
      {
          PDFName: "GDP and National Accounts Fourth Quarter of 2023",
          PDFURL: "https://www.stats.gov.sa/documents/20117/2066979/GDP+FQ42023E_0.pdf/145eeef3-ea98-4826-5ad8-7a882d486564?t=1735209534471",
          year: '2023',
          quarter: 'Fourth (4)',
      },
      {
          PDFName: "Annual National Accounts Publication 2022",
          PDFURL: "https://www.stats.gov.sa/documents/20117/2066979/Annual+National+Accounts+Publication+2022+EN.pdf/bafd06e4-1379-7f8e-0765-d3ef1c0947df?t=1735155306054",
          year: '2022',
          quarter: 'Fourth (4)',
      }
    ];
    this.TopIndicators = [
      {
        title: 'Gross Domestic Product',
        link_url: 'gross-domestic-product',
        value: 1700000,
      }, {
        title: 'ICT Employment Rate',
        link_url: 'indicator360/trend-analysis',
        value: 12,
      }, {
        title: 'Total Exports',
        link_url: 'indicator360/top-historical-publications',
        value: 1200000,
      }, {
        title: 'Total Imports',
        link_url: 'indicator360/main-authors',
        value: 2300000,
      },
      {
        title: 'Consumer Price Index',
        link_url: 'indicator360/relation-to-indicators-and-predictors',
        value: 112.28,
      }, {
        title: 'Life Expectancy at Birth',
        link_url: 'indicator360/relation-to-indicators-and-predictors',
        value: 78.5,
      },
      {
        title: 'Electricity In Household',
        link_url: 'indicator360/web-interactions-and-data-requests',
        value: 58,
      },
      {
        title: 'Tourism, Hajj and Umrah Statistics',
        link_url: 'indicator360/web-interactions-and-data-requests',
        value: 74,
      },
      {
        title: ' Agriculture Census',
        link_url: 'indicator360/web-interactions-and-data-requests',
        value: 62,
      },
        {
        title: 'Index of  imports quantity',
        link_url: 'indicator360/web-interactions-and-data-requests',
        value: 28.50,
      },
    ];
    this.statData = [
      {
        title: 'Gross Domestic Product (GDP)',
        link_url: 'gross-domestic-product',
        value: 1700000,
        icon: 'la-hand-holding-usd',
        persantage: '6.25',
        profit: 'up'
      }, {
        title: 'ICT Employment Rate',
        link_url: 'indicator360/trend-analysis',
        value: 12,
        icon: 'la-chalkboard-teacher',
        persantage: '4.35',
        profit: 'up'
      }, {
        title: 'Total Exports',
        link_url: 'indicator360/top-historical-publications',
        value: 1200000,
        icon: 'la-ship',
        persantage: '4.35',
        profit: 'up'
      }, {
        title: 'Total Imports',
        link_url: 'indicator360/main-authors',
        value: 2300000,
        icon: 'la-boxes',
        persantage: '2.22',
        profit: 'up'
      }
    ];
    this. MainAuthors = [
      {
          name: "Mohammed bin Mohammed",
          date: 'Sep 20, 2024',
          profile: 'assets/images/users/avatar-1.jpg',
          publications: "140",
          percentage: "15%"
      },
      {
          name: "Bandar Mohammed",
          date: 'Sep 23, 2024',
          profile: 'assets/images/users/avatar-2.jpg',
          publications: "350",
          percentage: "35%"
      },
      {
          name: "Abdullah Mohammed",
          date: 'Sep 27, 2024',
          profile: 'assets/images/users/avatar-3.jpg',
          publications: "87",
          percentage: "12%"
      },
      {
          name: "Mohammed Rashid",
          date: 'Sep 30, 2024',
          profile: 'assets/images/users/avatar-4.jpg',
          publications: "153",
          percentage: "17%"
      },
      {
          name: "Rashid Ibrahim",
          date: 'Sep 30, 2024',
          profile: 'assets/images/users/avatar-6.jpg',
          publications: "250",
          percentage: "22%"
      }
    ];
  }

  /**
 * Sale Location Map
 */
  options = {
    layers: [
      tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoidGhlbWVzYnJhbmQiLCJhIjoiY2xmbmc3bTV4MGw1ejNzbnJqOWpubzhnciJ9.DNkdZVKLnQ6I9NOz7EED-w", {
        id: "mapbox/light-v9",
        tileSize: 400,
        zoomOffset: 0,
        attribution: '',
      })
    ],
    zoom: 2.5,
    center: latLng(-52, 180)
  };
  layers = [
    circle([-52.5, 174.2], { color: "#1b83546b", opacity: 0.5, weight: 10, fillColor: "#1b83546b", fillOpacity: 1, radius: 40000, }),
    circle([-50.3, 179.5], { color: "#1b83546b", opacity: 0.5, weight: 10, fillColor: "#1b83546b", fillOpacity: 1, radius: 40000, }),
    circle([-55.5, 162.5], { color: "#1b83546b", opacity: 0.5, weight: 10, fillColor: "#1b83546b", fillOpacity: 1, radius: 40000, }),
  ];

  /**
 * Swiper Vertical  
   */
  Vertical = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    vertical: true // Enable vertical sliding
  };

  /**
   * Recent Activity
   */
  toggleActivity() {
    const recentActivity = document.querySelector('.layout-rightside-col');
    if (recentActivity != null) {
      recentActivity.classList.toggle('d-none');
    }

    if (document.documentElement.clientWidth <= 767) {
      const recentActivity = document.querySelector('.layout-rightside-col');
      if (recentActivity != null) {
        recentActivity.classList.add('d-block');
        recentActivity.classList.remove('d-none');
      }
    }
  }

  /**
   * SidebarHide modal
   * @param content modal content
   */
  SidebarHide() {
    const recentActivity = document.querySelector('.layout-rightside-col');
    if (recentActivity != null) {
      recentActivity.classList.remove('d-block');
    }
  }

}
