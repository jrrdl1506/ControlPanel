import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import Swal from 'sweetalert2';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  searchUser(){
    Swal.fire({
      title: 'Buscar alumno',
      input: 'text',
      inputLabel: 'Nombre del alumno',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      confirmButtonColor:'#61A3BA',
      cancelButtonText: 'Cancelar',
      cancelButtonColor:'#22668D',
      inputValidator: (value) => {
        if (!value) {
          return '¡Debes ingresar un texto!';
        }
        return null;
      }
    }).then((result) => {
      if (result.isConfirmed) {
        // Aquí puedes hacer algo con el valor ingresado, por ejemplo, mostrarlo en la consola
        console.log('Texto ingresado:', result.value);
      }
    });
  }

  showMenu(){
    Swal.fire({
      title: '',
      html: '<div style="display: flex; flex-direction: column;">' +
            '  <h2>Opciones avanzadas</h2><br>' +
            "  <button class='btn-blue-1'>Busqueda avanzada</button>" +
            "  <button class='btn-blue-1'>Añadir usuarios</button>" +
            "  <button class='btn-blue-1'>Eliminar usuarios</button>" +
            "  <button class='btn-blue-1'>Modificar usuarios</button>" +
            "  <button class='btn-blue-1'>Boletin informativo</button>" +

            
            '</div>',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      confirmButtonColor:'#61A3BA',
      cancelButtonText: 'Cancelar',
      cancelButtonColor:'#22668D',
      customClass: {
        container: 'custom-swal-container',  // Clase para el contenedor
        popup: 'custom-swal-popup',          // Clase para el popup
        confirmButton: 'custom-swal-confirm',
         // Clase para el botón de confirmar
        cancelButton: 'custom-swal-cancel'    // Clase para el botón de cancelar
        
      }
    }).then((result) => {
      if (result.isConfirmed) {
        // Lógica cuando se confirma la alerta
      }
    });
    
  }

}
