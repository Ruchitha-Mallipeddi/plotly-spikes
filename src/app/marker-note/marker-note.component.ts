import { Component, OnDestroy } from '@angular/core';
import { SharedService } from '../shared-service.service';
import {Subscription} from 'rxjs';
@Component({
  selector: 'app-marker-note',
  templateUrl: './marker-note.component.html',
  styleUrls: ['./marker-note.component.css']
})
export class MarkerNoteComponent implements OnDestroy {
  subscription: Subscription;
  marker_data;
  marker_x;
  marker_y;
  myStyles={
    // width: '120px',
  backgroundColor: 'rgb(0 0 0 / 25%)',
  // color: '#fff',
  textAlign: 'center',
  padding: '5px 5px',
  // borderRadius: '6px',
 
  position: 'absolute',
   zIndex: 1,
   left:'0px',
   top:'0px',
    
    
    
    
   
};
isShow= false;

  constructor(public sharedService: SharedService) { 
    this.subscription=this.sharedService.getClickCall().subscribe(data => {

      this.marker_data = data;
      if(data.point_data.points[0].curveNumber==0){
      this.marker_x=data.point_data.points[0].x;
      this.marker_y=data.point_data.points[0].y;
     
      console.log(this.marker_data);
      this.myStyles.left=data.point_data.event.pointerX.toString()+"px";
      this.myStyles.top=data.point_data.event.pointerY.toString()+"px";

      // var w=this.ele5.nativeElement.offsetWidth
      // var h=this.ele5.nativeElement.offsetHeight

      // var per=(data.event.pointerX/w)*100;
      // var perY=(data.event.pointerY/h)*100;
    //  console.log();
    //  this.myStyles.left=per+"%"

      // this.myStyles.left=data.point_data.event.pointerX.toString()+"px";
      // this.myStyles.top=data.point_data.event.pointerY.toString()+"px";
      this.isShow=true;
      }
      
     
      })
  }
  close(){
    this.isShow=false;
  }
   
  
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
}

}
