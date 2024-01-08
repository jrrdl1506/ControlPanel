import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-manager',
  templateUrl: './user-manager.component.html',
  styleUrls: ['./user-manager.component.scss']
})
export class UserManagerComponent {


    constructor(private router:Router){

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

    // ACTIVA EL FORMULARIO DEPENDIENDO DE LA OPCION QUE HAYAS SELECCIONADO
    activarFormulario(idForm:string = "Form1"){
      var form = document.getElementById(idForm);
      if(form){
        form.classList.add("form1");
      }
    }


    //DDETERMINA LA OPCION ELEGIDA EN EL SELECT
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

    continuarAlRegistro(){
      var inputHijos=document.getElementById('numHijos') as HTMLInputElement ;
      if(inputHijos ){
        var valorInputHijos = inputHijos.value;  
        console.log(valorInputHijos);
        Swal.fire({
          title: 'Cuenta creada',
          text: 'Seras redirigido a la pagina de registro',
          icon: 'success',
          showCancelButton: true,
          confirmButtonText: 'Aceptar',
          
        }).then((result) => {
          if (result.isConfirmed) {
            // Navegar a la página deseada
            this.router.navigate(['/stdRegistry',valorInputHijos]);
          }
        });
      }
      
       
    
    }


}
