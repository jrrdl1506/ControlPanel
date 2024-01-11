import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-user-modify',
  templateUrl: './user-modify.component.html',
  styleUrls: ['./user-modify.component.scss']
})
export class UserModifyComponent {

  constructor(private router:Router){

  }

  reportList(reporte:string){
    this.router.navigate(["/reportList/"+reporte]);
  }

}
