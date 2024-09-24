
//----------------noakhali flooded------------

document.getElementById('noakhali-donation').addEventListener('click', function(){
    const noakhaliDonation = getInputFieldValueById('noakhali-donation-amount')
    const remainingBalance = getTextFieldValueById('remaining-balance')
    

    if(noakhaliDonation <= 0 || noakhaliDonation >5500|| isNaN(noakhaliDonation)){
        alert('Invalid Donation Amount') 
        return;                          
    }
    
    const noakhaliTotalAmount = getTextFieldValueById('noakhali-total-amount')
    const newNoakhaliBalance = noakhaliTotalAmount + noakhaliDonation;
    document.getElementById('noakhali-total-amount').innerText = newNoakhaliBalance ;

    const newRemainingBalance = remainingBalance - noakhaliDonation;
    document.getElementById('remaining-balance').innerText = newRemainingBalance;   
    
    addHistory('Flood Relief in Noakhali', noakhaliDonation);

    document.getElementById('my_modal_4').showModal();
})

//----------------------Feni flooded----------------------
document.getElementById('feni-donation').addEventListener('click', function(){
    const feniDonation = getInputFieldValueById('feni-donation-amount')
    const remainingBalance = getTextFieldValueById('remaining-balance')
    

    if(feniDonation <= 0 || feniDonation > 5500 || isNaN(feniDonation)){
        alert('Invalid Donation Amount') 
        return;                          
    }

    const feniTotalAmount = getTextFieldValueById('feni-total-amount')
    const newFeniBalance = feniTotalAmount + feniDonation;
    document.getElementById('feni-total-amount').innerText = newFeniBalance ;

    const newRemainingBalance = remainingBalance - feniDonation;
    document.getElementById('remaining-balance').innerText = newRemainingBalance;

    addHistory('Flood Relief in Feni', feniDonation);

    document.getElementById('my_modal_4').showModal();
      
})

//---------------Quota movement------------------

document.getElementById('quota-donation').addEventListener('click', function(){
    const quotaDonation = getInputFieldValueById('quota-donation-amount')
    const remainingBalance = getTextFieldValueById('remaining-balance')
    

    if(quotaDonation <=0 || quotaDonation > 5500|| isNaN(quotaDonation)){
        alert('Invalid Donation Amount') 
        return;                          
    }

    const quotaTotalAmount = getTextFieldValueById('quota-total-amount')
    const newQuotaBalance = quotaTotalAmount + quotaDonation;
    document.getElementById('quota-total-amount').innerText = newQuotaBalance ;
    
    const newRemainingBalance = remainingBalance - quotaDonation;
     document.getElementById('remaining-balance').innerText = newRemainingBalance;

    addHistory('Aid for Injured in the Quota Movement', quotaDonation);

    document.getElementById('my_modal_4').showModal();
    
})

//-------------history section--------------------

document.getElementById('history').addEventListener('click', function(){
    console.log('history')
    document.getElementById('history-list').classList.remove('hidden')
    document.getElementById('donation-section').classList.add('hidden')
    
})

//---------Donation section------------
document.getElementById('donation-btn').addEventListener('click', function(){
    console.log('donation')
    document.getElementById('history-list').classList.add('hidden')
    document.getElementById('donation-section').classList.remove('hidden')

})

//..............,,NEW.ghddddddddddddd..........................
document.getElementById('blog').addEventListener('click', function() {
    // Redirect to the FAQ page
    window.location.href = 'blog.html';
});