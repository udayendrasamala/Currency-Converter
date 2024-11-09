const currencyone=document.getElementById("currency-one");
const amountone=document.getElementById("amount-one");
const currencytwo=document.getElementById("currency-two");
const amounttwo=document.getElementById("amount-two");
const rate=document.getElementById("rate");
const swap=document.getElementById("swap");

function caluclate(){
    const curr_one=currencyone.value;
    const curr_two=currencytwo.value;
    fetch(`https://v6.exchangerate-api.com/v6/f447989283eb6216848593df/latest/${curr_one}`)
    .then((res)=> res.json())
    .then((data)=>{
        const currrate=data.conversion_rates[curr_two];
        rate.innerText=`1 ${curr_one} = ${currrate} ${curr_two}`;
        amounttwo.value = (amountone.value * currrate).toFixed(2);
    });
}

currencyone.addEventListener("change",caluclate);
amountone.addEventListener("input", caluclate);
currencytwo.addEventListener("change",caluclate);
amounttwo.addEventListener("input",caluclate);

swap.addEventListener("click",()=>{
    const temp=currencyone.value;
    currencyone.value=currencytwo.value;
    currencytwo.value=temp;
    caluclate();
});

caluclate();
