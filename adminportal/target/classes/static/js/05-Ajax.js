$(document).ready(function(){
	
	console.log("FUNCIONA");

			var x=$("#datos");
			var y=$("#datos");
			
			/*Funciones para el recuadro de color */
			$("#boton1").click(
				function (){
					x.addClass("recuadro"); /*Métododo addClass*/
				}		
			); 
			$("#boton2").click(
				function (){
					y.removeClass("recuadro");/*Métododo removeClass*/
				}		
			); 
			
			var accion3=$("#formulario");
			
			$("#boton3").click(
				function (){
					accion3.html('<form style="color: black">Ingrese nombre		:	<input type="text" id="nombre" tyle="color: black"><br>Ingrese clave	:	<input type="text" id="clave"><br><input type="submit" value="confirmar"></form>');
				}
			);
			$('#boton4').click(
				function (){
					alert(accion3.html());
				}
			);
			
			//Eliminar lista
			$('#b1').click(
				function(){
					var objetoEliminado=$("#hola");
					objetoEliminado.empty();
				}
			);
			//Restaurar lista
			$('#b2').click(
				function(){
					var objetoRestaurado=$("#hola");
					objetoRestaurado.html('<li>Primer item.</li><li> Segundo item.</li><li>Tercer item.</li><li>Cuarto item.</li>');
				}
			);
			//Añadir elemento final
			$('#b3').click(
				function(){
					var aniadeElemento=$("#hola");
					aniadeElemento.append("<li>Otro item al final</li>");
				}
			);
			//Añadir elemento al inicio
			$('#b4').click(
				function(){
						var aniadeElemento=$("#hola");
						aniadeElemento.prepend("<li>Otrora item al principio</li>");
				}
			);
			//Eliminar elemento primero
			$('#b6').click(
				function(){
					var lista;		 
					lista=$("#lista1"); 	
					lista=lista.eq(0);
					lista.remove();
				}
			);
			//Eliminar elemento segundo
			$('#b7').click(
				function(){
					var lista
					var lista1;		 
					lista=$("#lista1"); 
					lista1=$("#lista2");	
					lista=lista.eq(0);
					lista.remove();
					lista1=lista1.eq(0);
					lista1.remove();
				}
			);
			//Eliminar elemento al final
			$('#b5').click(
				function(){
					var lista;		 //Esta variable también hace de array por lo que veo en javascript
					lista=$("#hola"); 	//En javascript parece que no hace falta crear arrays de lista
					var cantidad=lista.length;
					lista=lista.eq(cantidad-1);
					lista.remove();
				}
			);
			//Eliminar los dos últimos
			$('#b8').click(
				function(){
					var listaCompleta=$("#hola");

				
						for(var cont=0; cont<listaCompleta.length; cont++){
							if(cont=listaCompleta.length){
								$(".listaManipulada").eq(3).remove();
						
							}
							if(cont=2){
								$(".listaManipulada").eq(2).remove();
		
							}
						}
					
				}
			);

	
});
