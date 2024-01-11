import { Component,AfterViewInit,Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent  implements AfterViewInit{
 
 
  @Input() tipo: string="expedientes";
  exp:boolean=false;
  constructor(private router:Router){
    
  }
  ngAfterViewInit() {
   
  }

  
  
  gotoExpediente(){
    this.router.navigate(["/viewExp"]);
  }

  gotoReporte(){
    this.router.navigate(["/behaviorReport"]);
  }

  ngOnInit(){
    console.log(this.tipo.length);  
    console.log(this.tipo, "el tipo");
    if(this.tipo=="expediente"){
      console.log(this.tipo, "entro");
      this.exp=true;
    }
    else{
      this.exp=false;
    }
  }

}
