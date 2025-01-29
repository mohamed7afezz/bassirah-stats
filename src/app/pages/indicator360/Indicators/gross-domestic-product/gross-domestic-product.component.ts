import { Component } from '@angular/core';
import {NgApexchartsModule} from "ng-apexcharts";

@Component({
  selector: 'app-gross-domestic-product',
  standalone: true,
  imports: [
    NgApexchartsModule
  ],
  templateUrl: './gross-domestic-product.component.html',
  styleUrl: './gross-domestic-product.component.scss'
})
export class GrossDomesticProductComponent {
  /**
 * Main Authors
 */
  MainAuthors!: any;
  zoomableTimeseriesChart: any;
  stackedAreaChart: any;
  TopHistoricalPublication!: any;
  ngOnInit(): void {
    this.fetchData();
    this._zoomableTimeseriesChart('["--vz-success"]');
    this._stackedAreaChart('["--vz-success", "--vz-info", "--vz-light"]');
  }


  private fetchData() {
    this. MainAuthors = [
      {
          name: "Dr. Hamad bin Mohammed",
          date: 'Sep 20, 2024',
          profile: 'assets/images/users/avatar-1.jpg',
          publications: "140",
          percentage: "15%"
      },
      {
          name: "Bandar bin Ibrahim",
          date: 'Sep 23, 2024',
          profile: 'assets/images/users/avatar-2.jpg',
          publications: "350",
          percentage: "35%"
      },
      {
          name: "Yousef bin Abdullah",
          date: 'Sep 27, 2024',
          profile: 'assets/images/users/avatar-3.jpg',
          publications: "87",
          percentage: "12%"
      },
      {
          name: "Dr. Esam A. AlWagait",
          date: 'Sep 30, 2024',
          profile: 'assets/images/users/avatar-4.jpg',
          publications: "153",
          percentage: "17%"
      },
      {
          name: "Mr. David Wayne Kalisch",
          date: 'Sep 30, 2024',
          profile: 'assets/images/users/avatar-6.jpg',
          publications: "250",
          percentage: "22%"
      }
    ];
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
  }

  // Chart Colors Set
  private getChartColorsArray(colors:any) {
    colors = JSON.parse(colors);
    return colors.map(function (value:any) {
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
   * Zoomable Timeseries
   */
    private _zoomableTimeseriesChart(colors:any) {
      colors = this.getChartColorsArray(colors);
      this.zoomableTimeseriesChart = {
        series: [{
          name: 'XYZ MOTORS',
          data: [
              {
                x: new Date('2020-09-01').getTime(),
                y: 699669
              }, {
                x: new Date('2020-12-01').getTime(),
                y: 733340
              }, {
                x: new Date('2021-03-01').getTime(),
                y: 745678
              }, {
                x: new Date('2021-06-01').getTime(),
                y: 776912
              }, {
                x: new Date('2021-09-01').getTime(),
                y: 852652
              }, {
                x: new Date('2021-12-01').getTime(),
                y: 902844
              }, {
                x: new Date('2022-03-01').getTime(),
                y: 979448
              }, {
                x: new Date('2022-06-01').getTime(),
                y: 1088322
              }, {
                x: new Date('2022-09-01').getTime(),
                y: 1065229
              }, {
                x: new Date('2022-12-01').getTime(),
                y: 1024144
              }, {
                x: new Date('2023-03-01').getTime(),
                y: 1011430
              }, {
                x: new Date('2023-06-01').getTime(),
                y: 978487
              }, {
                x: new Date('2023-09-01').getTime(),
                y: 996833
              }, {
                x: new Date('2023-12-01').getTime(),
                y: 1016686
              }, {
                x: new Date('2024-03-01').getTime(),
                y: 1015536
              }, {
                x: new Date('2024-06-01').getTime(),
                y: 1022615
              }, {
                x: new Date('2024-09-01').getTime(),
                y: 1007109
              }, {
                x: new Date('2024-12-01').getTime(),
                y: 1088322
              }]
            }],
        chart: {
          type: 'area',
          stacked: false,
          height: 350,
          zoom: {
            type: 'x',
            enabled: true,
            autoScaleYaxis: true
          },
          toolbar: {
            autoSelected: 'zoom'
          }
        },
        colors: colors,
        dataLabels: {
          enabled: false
        },
        markers: {
          size: 0,
        },
        title: {
          text: 'Stock Price Movement',
          align: 'left',
          style: {
            fontWeight: 500,
          },
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.5,
            opacityTo: 0,
            stops: [0, 90, 100]
          },
        },
        yaxis: {
          showAlways: true,
          labels: {
            show: true,
            formatter: function (val:any) {
              return (val / 1000000).toFixed(0);
            },
          },
          title: {
            text: 'Price',
            style: {
              fontWeight: 500,
            },
          },
        },
        xaxis: {
          type: 'datetime',

        },
        tooltip: {
          shared: false,
          y: {
            formatter: function (val:any) {
              return (val / 1000000).toFixed(0)
            }
          }
        }
      };
    }


    /**
     * Stacked Area Chart
     */
    private generateDayWiseTimeSeries(baseval: number, count: number, yrange: { max: number; min: number; }) {
      var i = 0;
      var series = [];
      while (i < count) {
        var x = baseval;
        var y =
          Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

        series.push([x, y]);
        baseval += 86400000;
        i++;
        }
        return series;
    };
    private _stackedAreaChart(colors:any) {
      colors = this.getChartColorsArray(colors);
      this.stackedAreaChart = {
        series: [
          {
            name: "Web Interactions",
            // data: this.generateDayWiseTimeSeries(
            //   new Date("11 Feb 2017 GMT").getTime(),
            //   20,
            //   {
            //     min: 10,
            //     max: 60,
            //   }
            // ),
              data: [
              {
                x: new Date('2020-09-01').getTime(),
                y: 699669
              }, {
                x: new Date('2020-12-01').getTime(),
                y: 733340
              }, {
                x: new Date('2021-03-01').getTime(),
                y: 745678
              }, {
                x: new Date('2021-06-01').getTime(),
                y: 776912
              }, {
                x: new Date('2021-09-01').getTime(),
                y: 852652
              }, {
                x: new Date('2021-12-01').getTime(),
                y: 902844
              }, {
                x: new Date('2022-03-01').getTime(),
                y: 979448
              }, {
                x: new Date('2022-06-01').getTime(),
                y: 1088322
              }, {
                x: new Date('2022-09-01').getTime(),
                y: 1065229
              }, {
                x: new Date('2022-12-01').getTime(),
                y: 1024144
              }, {
                x: new Date('2023-03-01').getTime(),
                y: 1011430
              }, {
                x: new Date('2023-06-01').getTime(),
                y: 978487
              }, {
                x: new Date('2023-09-01').getTime(),
                y: 996833
              }, {
                x: new Date('2023-12-01').getTime(),
                y: 1016686
              }, {
                x: new Date('2024-03-01').getTime(),
                y: 1015536
              }, {
                x: new Date('2024-06-01').getTime(),
                y: 1022615
              }, {
                x: new Date('2024-09-01').getTime(),
                y: 1007109
              }, {
                x: new Date('2024-12-01').getTime(),
                y: 1088322
              }]
          },
          {
            name: "Data Requests",
            // data: this.generateDayWiseTimeSeries(
            //   new Date("11 Feb 2017 GMT").getTime(),
            //   20,
            //   {
            //     min: 10,
            //     max: 20,
            //   }
            // ),
              data: [
              {
                x: new Date('2020-09-01').getTime(),
                y: 733340
              }, {
                x: new Date('2020-12-01').getTime(),
                y: 699669
              }, {
                x: new Date('2021-03-01').getTime(),
                y: 776912
              }, {
                x: new Date('2021-06-01').getTime(),
                y: 745678
              }, {
                x: new Date('2021-09-01').getTime(),
                y: 1015536
              }, {
                x: new Date('2021-12-01').getTime(),
                y: 852652
              }, {
                x: new Date('2022-03-01').getTime(),
                y: 1088322
              }, {
                x: new Date('2022-06-01').getTime(),
                y: 979448
              }, {
                x: new Date('2022-09-01').getTime(),
                y: 1065229
              }, {
                x: new Date('2022-12-01').getTime(),
                y: 1011430
              }, {
                x: new Date('2023-03-01').getTime(),
                y: 1024144
              }, {
                x: new Date('2023-06-01').getTime(),
                y: 1088322
              }, {
                x: new Date('2023-09-01').getTime(),
                y: 996833
              }, {
                x: new Date('2023-12-01').getTime(),
                y: 1016686
              }, {
                x: new Date('2024-03-01').getTime(),
                y: 902844
              }, {
                x: new Date('2024-06-01').getTime(),
                y: 1022615
              }, {
                x: new Date('2024-09-01').getTime(),
                y: 1007109
              }, {
                x: new Date('2024-12-01').getTime(),
                y: 902844
              }]
          },

        ],
        chart: {
          type: "area",
          height: 350,
          stacked: true,
          events: {
            selection: function(chart:any, e:any) {
            },
          },
        },
        colors: colors,
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },
        fill: {
          type: "gradient",
          gradient: {
            opacityFrom: 0.6,
            opacityTo: 0.8,
          },
        },
        legend: {
          position: "top",
          horizontalAlign: "left",
        },
        xaxis: {
          type: "datetime",
        },
      };
    }
}
