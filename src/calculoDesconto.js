function valorFinalDaCompra (valorDaCompra, desconto) {
    const resultadoValorFinalDaCompra = valorDaCompra - desconto;
    return resultadoValorFinalDaCompra;
}


module.exports = {
    valorFinalDaCompra
}