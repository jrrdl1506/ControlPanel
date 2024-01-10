import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bulletin-report',
  templateUrl: './bulletin-report.component.html',
  styleUrls: ['./bulletin-report.component.scss']
})
export class BulletinReportComponent {

  constructor(private router:Router){

  }

  viewReport(){
    this.router.navigate(['/viewReport']);
  }

}
