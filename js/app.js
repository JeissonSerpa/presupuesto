//Variables 
const presupuestoUsuario = prompt('Cual es tu presupuesto semanal?');
const formulario = document.querySelector('#agregar-gasto');
let cantidadPresupuesto;


//Clase para capturar el presupuesto
class Presupuesto{
   constructor(presupuesto){
      this.presupuesto = Number(presupuesto);
      this.restante = Number(presupuesto);
   }

   presupuestoRestante(cantidad = 0){
      return this.restante -= Number(cantidad);
   }
}

//Clase para la interfaz HTML
class Interfaz{
   insertarPresupuesto(cantidad){
      console.log(cantidad);
      const total = document.querySelector('#total');
      const retante = document.querySelector('#restante');
      
      total.innerHTML = cantidad;
      restante.innerHTML = cantidad;
   }

   imprimirMensaje(mensaje, tipo){
      const divMensaje = document.createElement('div');
      divMensaje.classList.add('text-center', 'alert');

      if(tipo = 'error'){
         divMensaje.classList.add('alert-danger');
      }else{
         divMensaje.classList.add('alert-success');
      }

      divMensaje.appendChild(document.createTextNode(mensaje));
      //Insertar en el DOM
      document.querySelector('.primario').insertBefore(divMensaje, formulario);

      setTimeout(function(){
         document.querySelector('.primario .alert').remove();
         formulario.reset();
      }, 2000)
   }

}



//Event Listener
document.addEventListener('DOMContentLoaded', function(){
   if(presupuestoUsuario === null || presupuestoUsuario === ''){
      window.location.reload();
   }else{
      //Instanciar un presupuesto
      cantidadPresupuesto = new Presupuesto(presupuestoUsuario);

      //Instanciar la interfaz de usuario
      const ui = new Interfaz();
      ui.insertarPresupuesto(cantidadPresupuesto.presupuesto);
   }
});

formulario.addEventListener('submit', function(e){
   e.preventDefault();
   const cantidad = document.querySelector('#cantidad').value;
   const gasto = document.querySelector('#gasto').value;
   const ui = new Interfaz();

   if(cantidad === '' || gasto === ''){
      ui.imprimirMensaje('Hubo un error', 'error');
      
   }else{
      console.log(gasto);
      console.log(cantidad);
   }
});