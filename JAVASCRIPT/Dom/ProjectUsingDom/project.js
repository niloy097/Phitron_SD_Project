function handleDeposit()
{
    // var inputValue = document.getElementById("depo-ipt").value;
    // var intInputValue = strToNum(inputValue);
    var intInputValue = getConvValue("depo-ipt", "value");
    // var depositAmount = document.getElementById("depo-amo").innerText;
    // var intDepositAmount = strToNum(depositAmount);
    var intDepositAmount = getConvValue("depo-amo", "innerText");
    var sum = intInputValue + intDepositAmount;
    // document.getElementById("depo-amo").innerText = sum;
    setInnerText("depo-amo", sum);
    // var totalAmo = document.getElementById("total-amo").innerText;
    // var intTotalAmo = strToNum(totalAmo);
    var intTotalAmo = getConvValue("total-amo", "innerText");
    var totalSum = intInputValue + intTotalAmo;
    // document.getElementById("total-amo").innerText = totalSum;
    setInnerText("total-amo", totalSum);
    document.getElementById("depo-ipt").value = "";

}

function strToNum(value)
{
    return parseFloat(value);
}
function getConvValue(id, ele)
{
    if(ele == "innerText")
    {
        var value = document.getElementById(id).innerText;
        return parseFloat(value);
    }
    else
    {
        var value = document.getElementById(id).value;
        return parseFloat(value);
    }
    
}
function handleWithdraw()
{
//    var inputValue = document.getElementById("with-ipt").value;
//    var intInputValue = strToNum(inputValue);
   var intInputValue = getConvValue("with-ipt", "value");

//    var withdrawAmount = document.getElementById("with-amo").innerText;
//    var intWithdrawAmount = strToNum(withdrawAmount);

   var intWithdrawAmount = getConvValue("with-amo", "innerText");

   sum = intInputValue + intWithdrawAmount;

//    document.getElementById("with-amo").innerText = sum;
   setInnerText("with-amo", sum);
//    var totalAmo = document.getElementById("total-amo").innerText;

//    var intTotalAmo = strToNum(totalAmo);
   var intTotalAmo = getConvValue("total-amo", "innerText");

   var totalSum = intTotalAmo - intInputValue;

//    document.getElementById("total-amo").innerText = totalSum;
    setInnerText("total-amo", totalSum);
   document.getElementById("with-ipt").value = "";
}


function setInnerText(id, value)
{
    document.getElementById(id).innerText = value;
}