import { Component, Input, OnInit } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { RouteAnimation } from 'src/app/animations/routes-animations';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
  animations: [RouteAnimation]
})
export class BodyComponent implements OnInit {

  @Input() collapsed: boolean = false;
  @Input() screenWidth: number = 0;

  constructor() { }

  ngOnInit(): void {
  }
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
  getBodyClass(): string{
    let styleClass = '';
    if(this.collapsed && this.screenWidth > 768){
      styleClass = 'body-trimmed';
    } else if(this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0){
      styleClass = 'body-md-screen';
    } else if(!this.collapsed && this.screenWidth <= 768){
      styleClass = 'body-expanded';
    } else {
      styleClass = 'body-expanded';
    }
    return styleClass;
  }

}
