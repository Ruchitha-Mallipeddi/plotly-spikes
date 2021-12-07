import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared-service.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private subscription:Subscription
   public header="Click on a marker";
   myStyles={
     color:'black',
     display:'flex',
     justifyContent:'center',

   }
  constructor(public sharedService: SharedService) { 
    this.subscription=this.sharedService.getClickCall().subscribe(data => {      
     this.header="Marker has been clicked"
    this.myStyles.color='rgb(80 146 31)'
      })
  }

  ngOnInit(): void {
  }

}
