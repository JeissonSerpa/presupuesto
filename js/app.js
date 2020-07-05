//Variables 
const presupuestoUsuario = prompt('Cual es tu presupuesto semanal?');
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