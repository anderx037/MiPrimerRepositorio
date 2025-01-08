/*//SI RODRIGUEZ BAUTISTA ANDERSON JAVIER 
CC 1023916622
COHORTE 4 SECCION 2*/
    let operando1 = '';
    let operando2 = '';
    let operador = '';

  function agregarNumero(numero) {
            if (operador === '') {
        operando1 += numero;
            } else {
        operando2 += numero;
            }
    document.getElementById('display').value += numero;
        }

    function agregarOperador(op) {
        operador = op;
    document.getElementById('display').value += op;
        }

    function borrar() {
        document.getElementById('display').value = '';
    operando1 = '';
    operando2 = '';
    operador = '';
        }

function borrarNumero() {
    let pantalla = document.getElementById('display');
    pantalla.value = pantalla.value.slice(0, -1);
}

    function calcular() {
            const resultado = eval(operando1 + operador + operando2);
    document.getElementById('display').value = resultado;
    operando1 = resultado.toString();
    operando2 = '';
    operador = '';
        }