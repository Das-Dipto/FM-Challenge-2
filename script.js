let bill = document.getElementById('bill');
let people = document.getElementById('people');
let totalAmount = document.querySelector('.total-bill');
let tipAmount = document.querySelector('.tip-amount');

let num = 0;
let pep = 0;
let k = 1;
let i = false;
let num1 =1;
let num2 =1;
const billMuliplier = (a, z) =>{
       if ( i == z){
        num1 = a;
       }
       else{
        num2 = a;
       }
       totalAmount.innerHTML = `$ ${parseFloat(num1*num2).toFixed(2)}`;
    //    console.log(`The bill is ${num1} * ${num2} = ${parseFloat(num1*num2).toFixed(2)}`);
}

bill.addEventListener('keyup', ()=>{
    num = Number(bill.value);
    i = true;
    billMuliplier(num, i);
})

people.addEventListener('keyup', ()=>{
    pep = Number(people.value);
    billMuliplier(pep);
})



