import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  constructor() { 
    this.lastStart = performance.now();
  } 

  lastStart : number;
}
