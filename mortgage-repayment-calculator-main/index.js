
    const calculateButton = document.getElementById('calculate-button');
    // const mortgageRequiredMessage = document.getElementById('required-message1');
    const mortgageAmount = document.getElementById('mortgageAmount');
  const mortgageTerm = document.getElementById('mortgageTerm');
  const interestRate = document.getElementById('interestRate');
  const requiredMessage1 = document.getElementById('required-message1');
  const requiredMessage2 = document.getElementById('required-message2');
  const requiredMessage3 = document.getElementById('required-message3');
   
    calculateButton.addEventListener('click', () => {
   if(!mortgageAmount.innerText){
  requiredMessage1.style.display = 'block'
   }
   if(interestRate.innerText == ''){
    requiredMessage2.style.display = 'block'
     }
     if(mortgageTerm.innerText == ''){
        requiredMessage3.style.display = 'block'
         }


         mortgageAmount.addEventListener('input', ()=>{
            if(mortgageAmount.innerText != ''){
                 requiredMessage1.style.display = 'none'
            }
         })
    });

