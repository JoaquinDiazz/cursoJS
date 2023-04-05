let totalProductos = parseInt(prompt("Ingrese la cantidad de productos que compró"));

function calcularDescuento(precioTotal, descuento) {
    return Math.abs(precioTotal *  descuento / 100 - precioTotal);
};

let precioTotal = 0;
for (let i = 0; i < totalProductos; i++) {
    let precio = parseInt(prompt("Ingrese el precio de cada producto"));

    precioTotal = precioTotal + precio;
}

let descuento = parseInt(prompt("Ingrese el descuento"));
let precioFinal = calcularDescuento(precioTotal, descuento);

alert("El monto final es de " + precioFinal);

