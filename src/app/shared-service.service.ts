import { Injectable } from '@angular/core';
import { Observable ,Subject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  // constructor() { }
  private subject = new Subject<any>();

 sendClickCall(data: any) {
  console.log("in service1")
    this.subject.next({point_data:data });
    
 }

 getClickCall(): Observable<any> {
  console.log("in service")
    return this.subject.asObservable();
 }
}
