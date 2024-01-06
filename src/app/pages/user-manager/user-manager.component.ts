import { Component } from '@angular/core';

@Component({
  selector: 'app-user-manager',
  templateUrl: './user-manager.component.html',
  styleUrls: ['./user-manager.component.scss']
})
export class UserManagerComponent {


    constructor(){

    }

    // SE ACTIVA AL PUCHAR EL BOTON DE SIG POR PRIMERA VEZ
    // Determina el tipo de formulario que hay que mostrar
    avanzaFormulario(idForm:string = "Form1"){
      // 
      var form1 = document.getElementById(idForm);
      var userType = document.getElementById("selectType") as HTMLSelectElement;

      if(userType && form1){

        var tipo = userType.selectedIndex;
        var selectedOptionValue = userType.options[tipo].value;

        form1.classList.toggle("form1");
        console.log(selectedOptionValue,"SELECTED OPTION");
        var selectorId = this.determinarProxFormulario(selectedOptionValue);
        this.activarFormulario(selectorId);
      }
      
    }

    activarFormulario(idForm:string = "Form1"){
      var form = document.getElementById(idForm);
      if(form){
        form.classList.add("form1");
      }
    }


    determinarProxFormulario(usuarioTipo:string):string{
      var idFormulario = "Form1";
      switch(usuarioTipo){
        case "Profesor":{
          idFormulario ="FormProfesor";
          break;
        }
        case "Padre":{
          idFormulario ="FormPadre";
          break;
        }
        case "Administrativo":{
          idFormulario ="FormAdministrador";
          break;
        }

      }

      return idFormulario;
    }
}
