var nombres = ['Marielos','Mariana','Roberto','Josue'];
var expresion= 0;
switch(expresion){
	case 0:
	text = "Mostrando la lista";
	console.log(nombres);
	break;

	case 1:
	text = "Ingresando a una persona";
	var nuevaLongitud = nombres.push('Carlos');
	console.log(nombres);
	break;

	case 2:
	text= "Buscar una persona";
	var buscar = nombres[0];
	console.log(buscar);
	break;

	case 3:
	text = "Modificar a una persona";
	break;

	case 4:
	text = "Eliminar una persona";
	var ultimo = nombres.pop();
	console.log(nombres);
	break;

	case 5:
	text = "salir del programa";
	break;
}
