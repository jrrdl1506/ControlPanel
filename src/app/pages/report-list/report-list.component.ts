import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BulletinReportComponent } from 'src/app/components/bulletin-report/bulletin-report.component';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.scss']
})
export class ReportListComponent {

  reporte:string="error";
  mostrarExp:boolean=false;
  vairable:string="";
  constructor(private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.actRoute.params.subscribe(params => {
      this.vairable = params['report'];
      console.log(this.vairable);

      if (this.vairable == "expedientes") {
        this.mostrarExp = true;
        this.reporte = "expediente";
      } else {
        this.mostrarExp = false;
        this.reporte = "reporte";
      }
    });
  }



}
