$(".sidebar ul li").on('click', function () {
    $(".sidebar ul li.active").removeClass('active');
    $(this).addClass('active');
});

$('.open-btn').on('click', function () {
    $('.sidebar').addClass('active');

});


$('.close-btn').on('click', function () {
    $('.sidebar').removeClass('active');

})

// Kalkulator
const calculator= {
    displayNumber: '0',
    operator: null,
    firtNumber:null,
    waitingForSecondNumber:false
};
function updateDisplay(){
    document.querySelector('#displayNumber').innerText = calculator.displayNumber;
}

function clearCalculator(){
    calculator.displayNumber= '0';
    calculator.operator=null;
    calculator.firtNumber=null;
    calculator.waitingForSecondNumber=false;
}

function inverseNumber(){
    if(calculator.displayNumber==='0'){
        return;
    }
    calculator.displayNumber *= -1;
    
}

function handleOperator(operator){
    if(!calculator.waitingForSecondNumber){
        calculator.operator=operator;
        calculator.waitingForSecondNumber=true;
        calculator.firtNumber = calculator.displayNumber;
    }else{
        window.alert('operator sudah ada');
    }
}
function performCalculation(){
    if(calculator.firtNumber=='0' && calculator.operator==null){
        window.alert('belum ada operator');
        return;
    }
    let result = 0;
    if(calculator.operator==='+'){
        result = (parseInt(calculator.firtNumber) + parseInt(calculator.displayNumber));
    }else{
        result = (parseInt(calculator.firtNumber) - parseInt(calculator.displayNumber));
    }
    calculator.displayNumber =result;
}
//fungsi memasukkan digit
function inputDigit(digit){
    if(calculator.waitingForSecondNumber && (calculator.displayNumber===calculator.firtNumber)){
        calculator.displayNumber= digit;
    }
    else{
        if(calculator.displayNumber==='0'){
            calculator.displayNumber=digit;
        }else{
            calculator.displayNumber+=digit;
        }
    }
    console.log(calculator);
}
//mendapatkan button
const buttons = document.querySelectorAll('.button');

for(let button of buttons){
    button.addEventListener('click',function(event){
       
        const target = event.target;

        if(target.classList.contains('clear')){
            clearCalculator();
            updateDisplay();
            return;
        }
        if(target.classList.contains('negative')){
            inverseNumber();
            updateDisplay();
            return;
        }
        if(target.classList.contains('equal')){
            performCalculation();
            updateDisplay();
            return;
        }
        if(target.classList.contains('operator')){
            handleOperator(target.innerText);
            updateDisplay();
            console.log(calculator);
            return;
        }
        inputDigit(target.innerText);
        updateDisplay();
    })
}