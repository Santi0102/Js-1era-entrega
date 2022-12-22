const contratarServicio = () => {
    let servicio = "";
    let meses = 0;
    let precio = 0;
    let saldoFinal = 0;

    do {
        servicio = prompt ("¿Que servicio deseas contratar: directv o flow?");
        meses = parseInt(prompt ("¿Durante cuantos meses deseas contratarlo?"));

        let cantidadDeMeses = numeroMensual(meses);

    switch (servicio) {
        case "directv":
            precio = 1900;
            break;
        case "flow":
            precio = 2050;
            break;
        default:
            alert("Alguno de los datos ingresados no es correcto");
            precio= 0;
            meses= 0;
    }

    saldoFinal += precio * cantidadDeMeses;
    seguirComprando = confirm("¿Deseas contratar algun otro servicio?");

    } while (seguirComprando)

    const totalPrecio = conDescuento(saldoFinal);
    const totalConEnvio = precioFinal(totalPrecio);

    return totalConEnvio;
}

const numeroMensual = (meses) => {
    while (Number.isNaN(meses) || meses === 0) {
        if (meses !== 0) {
            alert('Deber agregar un número.')
        } else {
            alert('Debe agregar un número distinto de cero.')
        }
        meses = parseInt(prompt ("¿Cuántos querés comprar?"));
    }

    return meses;
};

const conDescuento = (saldoFinal) => {
    let totalPrecio = 0;

    if (saldoFinal >= 0) {
        totalPrecio = saldoFinal * 0.25;
        return totalPrecio;
    } else {
        return saldoFinal;
    }
}

const precioFinal = (saldoFinal) => {
    let calculoFinal = false;

    calculoFinal = confirm("¿Quieres que se instale en tu casa?");

    if (calculoFinal && saldoFinal >= 0) {
      alert("El total de tu compra es $" + saldoFinal);
    }
    return saldoFinal;
}

const totalCompra = contratarServicio();