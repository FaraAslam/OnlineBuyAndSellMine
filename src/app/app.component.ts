import { DOCUMENT } from '@angular/common';
import { Component,Inject,HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'OnlineSellAndBuyUI';
  windowScrolled:boolean;
  constructor(private router:Router,@Inject(DOCUMENT) private document: Document){}
  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
}
@HostListener("window:scroll",[])
onWindowScroll() {
    if ( document.documentElement.scrollTop>500) {
        this.windowScrolled = true;
    } 
   else if (this.windowScrolled && document.documentElement.scrollTop || document.body.scrollTop < 100) {
        this.windowScrolled = false;
    }
}
  scrollToTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }  
}
