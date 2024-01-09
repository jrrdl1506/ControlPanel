import { Component, ViewEncapsulation } from '@angular/core';
import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ChatComponent {
  user:any;
  // ESTO SE DEBE EVALUAR CON EL LOCALSTORAGE O HACIENDO UNA PETICION
  isParent:boolean=true;

  constructor(private loginService:LoginServiceService){
    this.user=loginService.getUser();
  }

  responder(){

    var txtArea = document.getElementById("txtMsg") as HTMLTextAreaElement;
    const msg = txtArea.value;
    var chatMsgs = document.getElementById("chatMsgs") as HTMLElement; 
    console.log(msg,"Mesnaje");
    
      if (!this.isParent) {
        var newTchMsg = '<div class="msg left"><div class="teacher-msg">' +
                        '<p><strong>Maestro: </strong>' + msg + '</p>' +
                        '</div></div>';
        this.appendHtmlString(chatMsgs, newTchMsg);
      } else {
        var newPrtMsg = '<div class="msg right"><div class="parent-msg">' +
                        '<p><strong>Padre: </strong>' + msg + '</p>' +
                        '</div></div>';
        this.appendHtmlString(chatMsgs, newPrtMsg);
      }
    chatMsgs.offsetHeight;

  }


  appendHtmlString(parent:any, htmlString:any) {
    var tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlString;
    parent.appendChild(tempDiv.firstChild);
}

}
