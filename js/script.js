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

    document.getElementById('my_modal_4').showModel();

})


document.getElementById('feni-donation').addEventListener('click', function(){
    const feniDonation = getInputFieldValueById('feni-donation-amount')
    const remainingBalance = getTextFieldValueById('remaining-balance')
    

    if(feniDonation < 0 || isNaN(feniDonation)){
        alert('Invalid Donation Amount')                           
    }
    else{
        const feniTotalAmount = getTextFieldValueById('feni-total-amount')
        const newFeniBalance = feniTotalAmount + feniDonation;
        document.getElementById('feni-total-amount').innerText = newFeniBalance ;
        
    }

    const newRemainingBalance = remainingBalance - feniDonation;
    document.getElementById('remaining-balance').innerText = newRemainingBalance;
    
    
})


document.getElementById('feni-donation').addEventListener('click', function(){
    const feniDonation = getInputFieldValueById('feni-donation-amount')
    const remainingBalance = getTextFieldValueById('remaining-balance')
    

    if(feniDonation < 0 || isNaN(feniDonation)){
        alert('Invalid Donation Amount')                           
    }
    else{
        const feniTotalAmount = getTextFieldValueById('feni-total-amount')
        const newFeniBalance = feniTotalAmount + feniDonation;
        document.getElementById('feni-total-amount').innerText = newFeniBalance ;
        
    }

    const newRemainingBalance = remainingBalance - feniDonation;
    document.getElementById('remaining-balance').innerText = newRemainingBalance;
    
    
})



