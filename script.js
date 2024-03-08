function add(num1,num2){
    return (num1+num2);
}
function subtract(num1,num2){
    return (num1-num2);
}
function multiply(num1,num2){
    return (num1*num2);
}
function divide(num1,num2){
    if(num2!=0)
    return (num1/num2);
    else
    return "Error!"
}
function percentage(num){
    return(num/100);
}

const result=document.querySelector('.result');
result.textContent='0.';

if (result.innerHTML==='0.'){
    let str='';
    const n1=document.querySelectorAll('.btn');
    n1.forEach((n)=>{
        n.addEventListener('click',()=>{
            str+=n.textContent;
            console.log(str);
            result.textContent=str;
        });
        
    });
    
}
