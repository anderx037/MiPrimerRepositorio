var numero = "";
var numero1 = 0;
var numero2 = 0;
var resultado = 0;
var operador = "";
var numMuestra = "";
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
       
function Escribir(P_numero) {
    if (P_numero == "+") {

    }
    else {
        numero = numero + P_numero;
    }
    numMuestra = numMuestra + P_numero
    num1.value = numMuestra
}
function Resultado() {
    numero2 = Number(numero);
    {

        if (operador == "+") {
            resultado = numero1 + numero2;
        }

        if (operador == "-") {
            resultado = numero1 - numero2;
        }
        if (operador == "*") {
            resultado = numero1 * numero2;
        }
        if (operador == "/") {
            resultado = numero1 / numero2;
        }
       
        num1.value = resultado;
    }
}
function clearDisplay() {
    numero = "";
    numero1 = 0;
    numero2 = 0;
    calculateResult = 0;
    operador = "";
    numMuestra = "";
    document.getElementById("num1").value = "";
}
