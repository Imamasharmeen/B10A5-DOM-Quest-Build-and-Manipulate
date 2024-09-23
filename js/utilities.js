
  
function getInputFieldValueById (id){
    const inputDonation = parseFloat(document.getElementById(id).value);
    return inputDonation ;   
}

function getTextFieldValueById(id){
    const totalAmount = parseFloat(document.getElementById(id).innerText);
    return totalAmount;
}