import { Component } from '@angular/core';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { ToolbarComponent } from 'src/app/components/toolbar/toolbar.component';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent {
  private credentials:any;
  public tipoUsuario:string="";
  constructor(private loginService:LoginServiceService){
      this.credentials = loginService.getUser();
      
      this.tipoUsuario=this.determinaUsuario(this.credentials);

  }

  private determinaUsuario(user:any):string{
    
    var tipo:string="";
    switch(user.userType){
      case "1":{
        tipo="Profesor";
        break;
      }
      case "2":{
        tipo="Padre";
        break;
      }
      case "3":{
        tipo="Administrativo";
        break;
      }
      case "4":{
        tipo="Admin";
        break;
      }
    }
    console.log(tipo);
    return tipo;
  }



}
