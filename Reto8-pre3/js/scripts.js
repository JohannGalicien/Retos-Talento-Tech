document.addEventListener('DOMContentLoaded', function() {
    const number1 = document.getElementById('number1')
    const number2 = document.getElementById('number2')
    

    addbutton.addEventListener('click', function() {
        const num1 = number1.value.trim()
        const num2 = number2.value.trim()
       

        if (num1 === '' || num2 === '' || isNaN(Number(num1)) || isNaN(Number(num2))) {
            result.textContent = `Eso no es un número`
            return

        
        }
        
             const addy = Number(num1) + Number(num2)
             console.log('suma igual', addy)
             result.textContent = `Resultado: ${addy}`

         
    })
})