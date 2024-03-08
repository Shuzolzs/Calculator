function operate(num1,num2,op){
    num1=parseFloat(num1);
    num2=parseFloat(num2);
    if(op=='+'){
        return(num1+num2);
    }
    else if(op=='-'){
        return(num1-num2);
    }
    if(op=='*'){
        return(num1*num2);
    }
    else if(op=='/'){
        if(num2!=0)
        return(num1/num2);
        else
        return 'Error!';
    }
    else{
        return(num1*0.01);
    }
}
function scanText(str){
    let p1=0,p2=0,c=0;
    let st1=[],st2=[];
    let ch1=str.charAt(str.length-1);
    let ch2=str.charAt(0);
    if((ch1==='+')||(ch1==='-')||(ch1==='*')||(ch1==='/')){
        return 'Error!';
    }
    if((ch2==='+')||(ch2==='-')||(ch2==='*')||(ch2==='/')){
        return 'Error!';
    }
    for(let i=0;i<str.length;i++){
        let ch=str.charAt(i);
        if(ch1=='%'){
            if(str.length>1)
            return 'Error!';
            else{
            return(operate(str.charAt(0),str.charAt(1),'%'))
            }
        }
        if((ch=='+')||(ch=='-')||(ch=='*')||(ch=='/')||(ch=='%')){
            let chh=str.charAt(i+1);
            p2=i;
            st1[c]=str.substring(p1,p2);
            st2[c]=str[p2];
            p1=p2+1;
            c++;
        }
    }
    //st1 stores the operands and st2 stores the operators
    st1[c]=str.charAt(str.length-1);
    // console.log(st1);
    // console.log(st2);
    for(let i=0;i<st1.length-1;i++){
        if(ch1!='%'){
        res=operate(st1[i],st1[i+1],st2[i]);
        res=parseFloat(res.toFixed(6));
        st1[i+1]=res;
        if(res=='Error')
        return 'Error';
        }
    }

    return res;
}

const result=document.querySelector('.result');
result.textContent='0.';

if (result.innerHTML==='0.'){
    const n1=document.querySelectorAll('button');
    let str='';
    n1.forEach((n)=>{
        n.addEventListener('click',()=>{
            if(n.className!='func no-disp'){
                const text=n.textContent;
                str+=text;
                if(n.id=='point'){
                    n.disabled=true;
                }
            }
            else if(n.id=='clear'){
                str=str.substring(0,str.length-1);
                if(str.length==0){
                    str='0.';
                    result.textContent=str;
                    str='';
                    return;
                }

            }
            else if(n.id=='equals'){
                const res=scanText(str);
                str=res;
                result.textContent=str;
                str='';
                return;
            }
            else{
                str='0.';
                result.textContent=str;
                str='';
                return;
            }
            result.textContent=str;
        });
    });
}
