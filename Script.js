var numero = "";
var numero1 = 0;
var numero2 = 0;
var resultado = 0;
var operador = "";

function Escribir(num) {
    numero += num.toString();
    document.getElementById("num1").value = numero;
}

function sumar() {
    numero1 = Number(numero);
    operador = "+";
    numero = "";
    Escribir('+');
}

function resta() {
    numero1 = Number(numero);
    operador = "-";
    numero = "";
    Escribir('-');
}

function multiplicacion() {
    numero1 = Number(numero);
    operador = "*";
    numero = "";
    Escribir('*');
}

function dividir() {
    numero1 = Number(numero);
    operador = "/";
    numero = "";
    Escribir('/');
}

function calcular(P_numero) {
    switch (operador) {
        case "+":
            numero = numero1 + P_numero;
            break;
        case "-":
            numero = numero1 - P_numero;
            break;
        case "*":
            numero = numero1 * P_numero;
            break;
        case "/":
            numero = numero1 / P_numero;
            break;
    }
}

function Resultado() {
    numero2 = Number(numero);
    calcular(numero2);
    document.getElementById("num1").value = numero;
}

function clearDisplay() {
    numero = "";
    numero1 = 0;
    numero2 = 0;
    resultado = 0;
    operador = "";
    document.getElementById("num1").value = "";
}