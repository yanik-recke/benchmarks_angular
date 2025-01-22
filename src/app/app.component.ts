import { Component } from '@angular/core';
import { ChildComponent } from "./child/child.component";
import { AfterViewChecked } from '@angular/core';
import { TimeService } from './time-service.service';
import { afterRender } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewChecked {
  title = 'benchmark_angular';

  constructor(private timer: TimeService){

  }

  ngAfterViewChecked(): void {
    console.log('Last action took: ' + (performance.now() - this.timer.lastStart));
  }
  
}
