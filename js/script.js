document.getElementById('noakhali-donation').addEventListener('click', function(){
    const noakhaliDonation = getInputFieldValueById('noakhali-donation-amount')
    const remainingBalance = getTextFieldValueById('remaining-balance')
    

    if(noakhaliDonation < 0 || isNaN(noakhaliDonation)){
        alert('Invalid Donation Amount')                           
    }
    else{
        const noakhaliTotalAmount = getTextFieldValueById('noakhali-total-amount')
        const newNoakhaliBalance = noakhaliTotalAmount +noakhaliDonation;
        document.getElementById('noakhali-total-amount').innerText = newNoakhaliBalance ;
        
    }

    const newRemainingBalance = remainingBalance - noakhaliDonation;
    document.getElementById('remaining-balance').innerText = newRemainingBalance; 
})




