import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder,FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent {
  arrHijos:Array<any>=[];
  param:string="";
  numHijos:number;
  formulario:FormGroup;

  constructor(private actRoute:ActivatedRoute,private fb:FormBuilder,private router:Router){
    this.param=this.actRoute.snapshot.params['numRegistros'];
    this.numHijos = parseInt(this.param);
    this.formulario = this.fb.group({
      nombre: [''],
      apellido_paterno: [''],
      apellido_materno: [''],
      edad: [''],
      grado: [''],
      grupo: [''],
      foto: [''],
    });
  }

  siguiente(){

  }

  enviar(){
    // console.log("aaaaa");
    console.log(this.numHijos);
    if(this.validarForm()==true && this.numHijos > 0){
      console.log("entro");
      this.numHijos=this.numHijos-1;
      this.añadirAlArray();
      this.inicializarFormulario();
      console.log(this.arrHijos,"arrHijos");
      this.alertaHjosRest();
      if(this.numHijos==0){
        this.deshabilitarBtn("btnCapturar");
        this.habilitarBtn("btnGuardar");
      }
      
    }
    else if(this.validarForm()==true && this.numHijos==0){
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Hay datos incompletos",
        footer: ''
      });
    }
   
  }

// Valida el formulario
  validarForm():boolean{
    if (
      this.formulario.value.nombre.trim() === '' ||
      this.formulario.value.apellido_paterno.trim() === '' ||
      this.formulario.value.apellido_materno.trim() === '' ||
      this.formulario.value.edad.trim() === '' ||
      this.formulario.value.grado.trim() === '' ||
      this.formulario.value.grupo.trim() === '' 
      
    ) {
     
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Hay datos incompletos",
        footer: ''
      });
      return false;
  }
  console.log("true")
  return true;
}


añadirAlArray(){
  var datosFormulario = {
    nombre: this.formulario.value.nombre,
    apellido_paterno: this.formulario.value.apellido_paterno,
    apellido_materno: this.formulario.value.apellido_materno,
    edad: this.formulario.value.edad,
    grado: this.formulario.value.grado,
    grupo: this.formulario.value.grupo,
    foto: this.formulario.value.foto,
  };
  console.log('Datos del formulario:', datosFormulario);
  this.arrHijos.push(datosFormulario);
}

alertaHjosRest(){
  if(this.numHijos!=0){
    Swal.fire({
      icon: "success",
      title: "Exito",
      text: "Alumno capturado. Falta(n) " + this.numHijos,
      footer: ''
    });
  }
  else{
    Swal.fire({
      icon: "success",
      title: "Datos capturados",
      text: "Ahora presiona en guardar datos",
      showConfirmButton:true,
     
    });
  }
}


inicializarFormulario(){
  this.formulario = this.fb.group({
    nombre: [''],
    apellido_paterno: [''],
    apellido_materno: [''],
    edad: [''],
    grado: [''],
    grupo: [''],
    foto: [''],
  });
}

postArrayAlumnos(){
  this.router.navigate(['/panel']);
}

deshabilitarBtn(id:string){
  var btn = document.getElementById(id) as HTMLButtonElement;
  if(btn){
    
    btn.classList.add("hidden");
    
  }
}



habilitarBtn(id:string){
  var btn = document.getElementById(id) as HTMLButtonElement;
  if(btn){
    
    btn.classList.remove("hidden");
    
  }
}


}
