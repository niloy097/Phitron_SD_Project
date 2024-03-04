function sum(val1, val2)
{
    return parseFloat(val1) + parseFloat(val2);
}

function subtract(val1, val2)
{
    return parseFloat(val2) - parseFloat(val1);
}
//clicking withdraw button
document.getElementById('btn-withdraw').addEventListener('click', function()
{
    //getting withdraw amount-->
    const withdrawFiled = document.getElementById('withdraw-field');
    const withDrawVal = withdrawFiled.value;

    const withDrawElement = document.getElementById('withdraw-total');

    const balanceTotalElement = document.getElementById('balance-total');

    const witDrawPrevVal = withDrawElement.innerText;

    const balanceTotal = balanceTotalElement.innerText;

    if(parseFloat(withDrawVal) > parseFloat(balanceTotal))
    {
        alert("You are a Poor MF")
    }
    else
    {
        const currentSum = sum(withDrawVal, witDrawPrevVal);
        const currBalance = subtract(withDrawVal, balanceTotal);
        document.getElementById('withdraw-total').innerText = currentSum;
        balanceTotalElement.innerText = currBalance;
        
    }
    document.getElementById('withdraw-field').value = '';
    


   
})