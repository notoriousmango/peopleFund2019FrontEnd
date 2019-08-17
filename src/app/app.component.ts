import { Component, HostListener, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('calculation',{static:true}) scrollDesctination: ElementRef;
  title = 'peopleFund';
  state = 'show';
  constructor(private el: ElementRef) {

  }
  @HostListener('window:scroll', ['$event'])
    checkScroll() {
      const componentPosition = this.scrollDesctination.nativeElement.offsetTop;
      const scrollPosition = window.pageYOffset;
      if (scrollPosition > componentPosition - 10 ) {
        this.state = 'hide';
      } else {
        this.state = 'show';
      }

    }
  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
    // this.state = 'hide';
  }

}
