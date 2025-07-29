document.addEventListener('DOMContentLoaded', function() {
    const number1 = document.getElementById('number1');
    const number2 = document.getElementById('number2');
    const resultado = document.getElementById('resultado');

    window.calcular = function(operacion) {
        const num1 = parseFloat(number1.value.trim());
        const num2 = parseFloat(number2.value.trim());
    
          console.log(num1)
            console.log(num2)

    if (isNaN(Number(num1)) || isNaN(Number(num2))) {

        resultado.textContent = 'Eso no es un número';
        return;
    }
    let result;

    switch (operacion) {

        case 'sumar':
            result = num1 + num2;
            break;
        case 'restar':
            result = num1 - num2;
            break;
        case 'multiplicar':
            result = num1 * num2;
            break;
        case 'dividir':
            if (num2 === 0) {
                resultado.textContent = 'No se divide por 0';
                return;
            }
            result = num1 / num2;
            break;
        default :
            result = 'SyntaxError';
            
        
        
            
          
            
    }
        console.log(result);
        resultado.textContent = `Resultado: ${result}`;
    
    }


}) 