import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { User } from "src/app/models/User";
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/services/login-service.service';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent  {
    userForms:FormGroup;

    constructor(private fb:FormBuilder, private router:Router,public loginService:LoginServiceService){
      this.userForms = this.fb.group({
        username:['',Validators.required],
        password:['',Validators.required]
      })

    }

    checkCredentials(){

      //El id y el userType deben ser obtenidos una vez se haga la peticion
      const USER:User ={
        id:"",
        userType: "1",
        username: this.userForms.get('username')?.value,
        password: this.userForms.get('password')?.value,
        
      }
      Swal.fire({
        title: 'Bienvenido',
        text: '[Nombre Usuario]',
        icon: 'success',
        showCancelButton: true,
        confirmButtonColor: '#61A3BA', // Cambia el color del botón de confirmación
        cancelButtonColor: '#22668D',    // Cambia el color del botón de cancelación
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          this.loginService.setUser(USER);
          this.router.navigate(['/panel']);
          
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          // Swal.fire('Cancelado', 'La acción ha sido cancelada.', 'error');
          Swal.fire({
            title: 'Oh no',
            text: 'Hubo un problema :(',
            icon: 'error',
           
            confirmButtonColor: '#61A3BA', // Cambia el color del botón de confirmación
               // Cambia el color del botón de cancelación
            confirmButtonText: 'Aceptar',
            
          })
        }
      });
  
      console.log(USER);
  
    }
}
