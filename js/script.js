document.getElementById('donation-noakhali').addEventListener('click', function(){
    const donation = getInputFieldValueById('donation-amount')

    if(donation > 0){
        
        const noakhaliTotalAmount = getTextFieldValueById('noakhali-total-amount')
        const newBalance = noakhaliTotalAmount + donation;
        document.getElementById('noakhali-total-amount').innerText = newBalance;                    
    }
})

