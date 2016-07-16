// Crear la clase (con la función constructora) de teléfono, un teléfono tiene un número asignado que se le pasa
// a la función constructora, y carácterístcas como marca y color y tiene un contador de llamadas que parte en
// cero. (1 pto)
// Crear un método que se llame marcar que recibe como argumento un número de teléfono y aumente un
// contador de llamadas en uno (1 pto)

var telefono = {

	caract: "3G",
	marca : "apple",
	color : "dorado",
	llamdas :0;

}

function marcar{

	telefono.llamadas(0++);

}