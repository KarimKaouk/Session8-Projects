const currencyEl_one= document.getElementById
('currency-one');
const currencyEl_two= document.getElementById
('currency-two');
const amountEL_one= document.getElementById
('amount-one');
const amountEL_two= document.getElementById
('amount-two');

const rateEL=document.getElementsByClassName('rate');
const swap = document.getElementsByClassName('swap-rate-container');


function calculate () {
    const currency_one = currencyEl_one.value;
    const currency_two=currencyEl_two.value;
    fetch('https:api.excchangerate-api.com/v4/latest/${currency_one}')
    .then(res => res.json())
    .then(data=>{
        const rate = data.rates[currency_two];
        rateEL.innerText=`1 ${currency_one}` = `${rate} ${currency_two}`;
   
        amountEL_two.value=(amountEL_one.value*rate).toFixed(2);
    });
}

calculate();

currencyEl_one.addEventListener('change', calculate);
amountEL_one.addEventListener('input', calculate);
currencyEl_two.addEventListener('change', calculate);
amountEL_two.addEventListener('input', calculate);
swap.addEventListener('click', () => {
    const temp = currencyEl_one.value;
    currencyEl_one.value=currencyEl_two.value;
    currencyEl_two.value=temp;
    calculate();
});

calculate();