import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CmponentInteractionService {

  constructor() { }

  private todoSource = new Subject<any>();
  

  // Observable string streams
  todoAnnounced$ = this.todoSource.asObservable();
  

  // Service message commands
  announceProduct(mission: any) {
    this.todoSource.next(mission);
  }
}
