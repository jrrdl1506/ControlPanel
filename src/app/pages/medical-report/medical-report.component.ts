import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-medical-report',
  templateUrl: './medical-report.component.html',
  styleUrls: ['./medical-report.component.scss']
})
export class MedicalReportComponent {
  expedienteForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.expedienteForm = this.fb.group({
      nombre: ['', Validators.required],
      apellidoPat: ['', Validators.required],
      apellidoMat: ['', Validators.required],
      edad: ['', Validators.required],
      peso: ['', Validators.required],
      altura: ['', Validators.required],
      sexo: ['Masculino', Validators.required],
      fechaExpediente: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', Validators.required],
      historialMedico: [''],
      medicamento: [''],
      alergico: ['']
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    const expedienteData = this.expedienteForm.value;
    console.log(expedienteData);
    

    Swal.fire({
      icon: "success",
      title: "Datos Capturados",
      text: "El expediente ha sido guardado",
      
    });
  }

}
