let bill = document.getElementById('bill');
let people = document.getElementById('people');
let totalAmount = document.querySelector('.total-bill');
let tipAmount = document.querySelector('.tip-amount');
let percentage = document.querySelectorAll('.percentage');
let prc = document.querySelectorAll('.pr');

let num = 0;
let pep = 0;
let k = 1;
let i = false;
let num1 =1;
let num2 =1;
let temp = 0;
let tip = 0;
const arr = ["5%", "10%", "15%", "25%", "50%"];
const billMuliplier = (a, z) =>{
       if ( i == z){
        num1 = a;
       }
       else{
        num2 = a;
       }
       totalAmount.innerHTML = `$ ${parseFloat(num1*num2).toFixed(2)}`;
       temp = parseFloat(num1*num2).toFixed(2);

       percentage.forEach((item, index)=>{
        item.addEventListener("click", ()=>{
           if (prc[index].innerHTML == arr[0]){
               tip = temp * 0.05;
               tipAmount.innerHTML = `$ ${parseFloat(tip).toFixed(2)}`;
           }
           else if (prc[index].innerHTML == arr[1]){
               tip = temp * 0.10;
               tipAmount.innerHTML = `$ ${parseFloat(tip).toFixed(2)}`;
           }
           else if (prc[index].innerHTML == arr[2]){
               tip = temp * 0.15;
               tipAmount.innerHTML = `$ ${parseFloat(tip).toFixed(2)}`;
           }
           else if (prc[index].innerHTML == arr[3]){
               tip = temp * 0.25;
               tipAmount.innerHTML = `$ ${parseFloat(tip).toFixed(2)}`;
           }
           else if (prc[index].innerHTML == arr[4]){
               tip = temp * 0.50;
               tipAmount.innerHTML = `$ ${parseFloat(tip).toFixed(2)}`;
           }
     
    
        })
      })
    
    
     
    //    console.log(`The bill is ${num1} * ${num2} = ${parseFloat(num1*num2).toFixed(2)}`);
}

bill.addEventListener('keyup', ()=>{
    num = bill.value;
    i = true;
    billMuliplier(num, i);
})

people.addEventListener('keyup', ()=>{
    pep = people.value;
    billMuliplier(pep);
})





