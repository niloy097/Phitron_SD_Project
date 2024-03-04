document.getElementById('btn-deposit').addEventListener('click', function()
{
    const depositField = document.getElementById('deposit-field');
    const depositAmount = depositField.value;
    

    const depositTotalElement = document.getElementById('deposit-total');
    const depositTotal = depositTotalElement.innerText;
    depositTotalElement.innerText = depositAmount;

    //adding deposit
    const sumDepoTotal = sum(depositTotal, depositAmount);
    depositTotalElement.innerText = sumDepoTotal;

    const balanceTotalElement = document.getElementById('balance-total');
    const balanceTotal = balanceTotalElement.innerText
    const sumBalanceTotal = sum(depositAmount, balanceTotal);
    balanceTotalElement.innerText = sumBalanceTotal;

    depositField.value = '';
});

function sum(val1, val2)
{
    return parseFloat(val1) + parseFloat(val2);
}