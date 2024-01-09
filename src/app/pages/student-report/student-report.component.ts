import { Component } from '@angular/core';
import { FormGroup,Validators, FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-student-report',
  templateUrl: './student-report.component.html',
  styleUrls: ['./student-report.component.scss']
})
export class StudentReportComponent {
  reportForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.reportForm = this.formBuilder.group({
      asunto: ['', Validators.required],
      mensaje: [''],
      fecha: ['']
    });
  }

  onSubmit() {
    if (this.reportForm.valid) {
      const formData = this.reportForm.value;
      
      Swal.fire({
        icon: "success",
        title: "Exito",
        text: "Reporte capturado satisfactoriamente",
        
      });
      console.log(formData); 
    } else {
      
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Aun hay campos sin completar",
        
      });
    }
  }

}
