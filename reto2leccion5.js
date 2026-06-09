const num1 = 20;
const num2 = 4;
const operador = "*";

switch(operador){
    case "+":
        console.log(num1 + num2);
        break;
    case "-":
        console.log(num1 - num2);
        break;
    case "*":
        console.log(num1 * num2);
        break;
    case "/":
        if(num2 === 0){
            console.log("No se puede dividir entre cero");
        }else{
            console.log(num1 / num2);
        }
        break;
    default:
        console.log("Operador inválido");
}
