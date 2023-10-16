let input1 = document.getElementById('input1')
let input2 = document.getElementById('input2')
let input3 = document.getElementById('input3')
const btnClac = document.getElementById('btnCalc')

btnClac.addEventListener('click', calcular)

function calcular(){
    const num1 = parseFloat(input1.value)
    const num2 = parseFloat(input2.value)
    const num3 = parseFloat(input3.value)

    const years1 = document.getElementById('years1')
    const meses1 = document.getElementById('meses1')
    const dias1 = document.getElementById('dias1')

    const fechaActual = new Date()

    let diaActual = fechaActual.getDate()
    let mesActual = fechaActual.getMonth()
    let yearActual = fechaActual.getFullYear()

    
        if(diaActual < num1){
            diaActual = diaActual + 30  
        }
    
        const dias = diaActual - num1
        years1.textContent = dias
    
        if(mesActual < num2){
            mesActual = mesActual + 12
            yearActual = yearActual - 1
        }
    
        const meses = mesActual - num2
        meses1.textContent = meses
    
        const years = yearActual - num3
        dias1.textContent = years
       
}