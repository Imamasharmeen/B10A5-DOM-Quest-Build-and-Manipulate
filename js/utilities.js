 function getInputFieldValueById (id){
    const inputDonation = parseFloat(document.getElementById(id).value);
    return inputDonation ;   
}

function getTextFieldValueById(id){
    const totalAmount = parseFloat(document.getElementById(id).innerText);
    return totalAmount;
}

//--Create addHistory function for history section-----
function addHistory(cause,amount){
    const historyCard = document.createElement('div');
    historyCard.className = "bg-white rounded-md mb-4 p-3 border-2 border-gray-500 ";

    historyCard.innerHTML = `
        <p><strong>${amount} BDT</strong> is Donated for ${cause}</p>
        <p>Date: ${new Date().toLocaleString('en-GB', { timeZone: 'Europe/Helsinki' })}</p>
    `;
    document.getElementById('history-list').appendChild(historyCard);
}