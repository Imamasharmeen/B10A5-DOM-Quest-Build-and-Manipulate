 /*if(inputDonation > 0){
        const noakhaliTotalAmount = getTextFieldValueById(id)
        totalDonation = noakhaliTotalAmount + inputDonation;
    
        document.getElementById('noakhali-total-amount').innerText = totalDonation.toFixed(2)
        console.log(totalDonation)
        document.getElementById('donation-amount').value = '';            
    }
    else{
        alart('Please enter positive amount.');
    }
    return totalDonation; */
  
function getInputFieldValueById (id){
    const inputDonation = parseFloat(document.getElementById(id).value);
    return inputDonation ;   
}

function getTextFieldValueById(id){
    const totalAmount = parseFloat(document.getElementById(id).innerText);
    return totalAmount;
}