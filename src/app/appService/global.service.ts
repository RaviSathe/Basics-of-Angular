import { Injectable } from '@angular/core';
import { Subject , BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() { }

  userName = new Subject<any>()
  // userName = new BehaviorSubject('kkkk')

  loggedIn = new BehaviorSubject(false)
}
