let totalProductos = parseInt(prompt("Ingrese la cantidad de productos que compró"));

function calcularDescuento(precioTotal, descuento) {
    return Math.abs(precioTotal *  descuento / 100 - precioTotal);
};

alert("Recuerde que el monto total debe ser mayor a 1000 pesos para que se aplique el descuento")

let precioTotal = 0;
for (let i = 0; i < totalProductos; i++) {
    let precio = parseInt(prompt("Ingrese el precio de cada producto sin el signo de pesos"));

    precioTotal = precioTotal + precio;
}

if (precioTotal > "1000") {
    
    let descuento = parseInt(prompt("Ingrese el descuento sin el signo de porcentaje"));
    let precioFinal = calcularDescuento(precioTotal, descuento);
    alert("El monto final es de " + precioFinal + " pesos.");

} else {
    alert("Monto insuficiente")
}




