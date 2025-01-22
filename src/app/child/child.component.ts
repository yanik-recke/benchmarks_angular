import { Component } from '@angular/core';
import { ViewContainerRef } from '@angular/core';
import { ContentComponent } from '../content/content.component';
import { TimeService } from '../time-service.service';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {


  constructor(private viewContainer: ViewContainerRef, private timer: TimeService) {
    
  }

  loadSingleContent() {
    this.timer.lastStart = performance.now();
    
    this.viewContainer.createComponent(ContentComponent);  
  }

  loadContent() {    
    this.timer.lastStart = performance.now();
    
    for (let step = 0; step < 10_000; step++) {
      this.viewContainer.createComponent(ContentComponent);  
    }
  }

  removeContent() {
    this.timer.lastStart = performance.now();

    this.viewContainer.clear();
  }

  removeSingleContent() {
    this.timer.lastStart = performance.now();

    this.viewContainer.remove(Math.floor(Math.random() * 10_000));
  }
}
