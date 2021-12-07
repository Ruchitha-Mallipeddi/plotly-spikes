import { Component, OnInit,ViewChild,AfterViewInit,ElementRef } from '@angular/core';
import * as Plotly from 'plotly.js-dist';
import { SharedService } from '../shared-service.service';
@Component({
  selector: 'app-base-plot',
  templateUrl: './base-plot.component.html',
  styleUrls: ['./base-plot.component.css']
})
export class BasePlotComponent implements AfterViewInit {

  constructor(public sharedService: SharedService) { }
  @ViewChild('lineChart', { static: true }) el: ElementRef;

  ngAfterViewInit(): void {
    var trace1 = {
      x: [1, 2, 3, 4],
      y: [47,47,47,47],
      type: 'scatter',
      mode:'text',
      text:'📓​',
      name:'markers',
    };
    
    var trace2 = {
      x: [2, 3, 4, 5],
      y: [16, 25, 31, 41],
      mode: 'lines+markers',
      name: 'lines-markers',
      line: {
        // color: 'rgb(165, 42, 42)',
        width: 3
      }
    };
    var data = [trace1, trace2];

    var layout = {
      title:'Basic Charts',
      xaxis: {
        title: 'X axis',
        showgrid: false,
        zeroline: false
      },
      yaxis: {
        title: 'Y axis',
        showline: false
      },
    }
    Plotly.newPlot(this.el.nativeElement, data,layout);
    this.el.nativeElement
    .on('plotly_click',  (data)=> {
      this.click(data);
    });
  }
  click(data: any)
   {
    //  console.log(data);
    
    this.sharedService.sendClickCall(data);

  }


}
