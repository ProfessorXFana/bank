const loginButton = document.getElementById('login');
loginButton.addEventListener("click", function(){
    const submitArea = document.getElementById('login-area');
    submitArea.style.display = "none";
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
})

// diposit function added

const addDeposit = document.getElementById('addDiposit');
addDeposit.addEventListener('click', function(){
    const dipositNumber = getInputNumber('DepositAmount');
  
    updateSpanText('currentDiposit', dipositNumber);
    updateSpanText('currentBalance', dipositNumber);

    document.getElementById('DepositAmount').value = "";

})

function getInputNumber(id){
    const Amount = document.getElementById(id).value;
    const amountNumber = parseFloat(Amount);
    return amountNumber
}

function updateSpanText(id, dipositNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const total = dipositNumber + currentNumber;
    document.getElementById(id).innerText = total;
    
}

// Withdraw function added

const withdrawBtn = document.getElementById('addWithdraw');
withdrawBtn.addEventListener('click', function(){
    const withdrawnumber = getInputNumber('withdrawAmount');

    updateSpanText('currentWithdraw', withdrawnumber);
    updateSpanText('currentBalance', -1 * withdrawnumber);

    document.getElementById('withdrawAmount').value = "";

})

