let total_divida = 1400;
function atualizar_divida(valor_recebido) {
    total_divida -= valor_recebido;
    console.log(total_divida);
    return total_divida;
}
for (var i = 0; i < 12; i++) {
    atualizar_divida(70);
}