import { Component, OnInit, Input } from '@angular/core';
import { timer, interval } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
@Component({
  selector: 'app-progressBar',
  templateUrl: './progressBar.component.html',
  styleUrls: ['./progressBar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  constructor() { }
  private readonly timerConstant = 20;
  private source = interval(this.timerConstant);
  public widthGoal = 0;
  public currentWidth = 0;
  @Input()
  set width(value: any) {
    this.widthGoal = value;
    this.runProgressBar();
  }
  ngOnInit() {
  }
  private runProgressBar() {
    this.source.subscribe(() => {
      if (this.currentWidth === this.widthGoal) {
        return;
      }
      this.currentWidth = this.widthGoal > this.currentWidth ?  this.currentWidth + 1 : this.currentWidth - 1;
    });

  }

}
