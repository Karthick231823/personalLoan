import { Component, OnInit, AfterViewInit, Renderer2 } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit, AfterViewInit {

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }



  ngAfterViewInit() {
    this.activePage();
  }


  activePage() {
    const pathName = window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1);

    switch (pathName) {
      case 'personaldeatils':
        this.renderer.addClass(document.querySelector('.personalDet'), 'active');
        break;
      case 'loandetails':
        this.renderer.addClass(document.querySelector('.personalDet'), 'completed');
        this.renderer.addClass(document.querySelector('.loanDet'), 'active');
        break;

      case 'esignature':
        this.renderer.addClass(document.querySelector('.personalDet'), 'completed');
        this.renderer.addClass(document.querySelector('.loanDet'), 'completed');
        this.renderer.addClass(document.querySelector('.signForm'), 'active');
        break;

      case 'disburse':
        this.renderer.addClass(document.querySelector('.personalDet'), 'completed');
        this.renderer.addClass(document.querySelector('.loanDet'), 'completed');
        this.renderer.addClass(document.querySelector('.signForm'), 'completed');
        this.renderer.addClass(document.querySelector('.disburseDet'), 'active');

        break;
      default:
        this.renderer.addClass(document.querySelector('.personalDet'), 'active');
    }
  }
}
