function getValue(val)
{
    // var value = document.getElementById("seven").innerText;
    // console.log(value);
    console.log(cnVdata("seven", "innerText"));
    console.log(cnVdata("eight", "innerText"));
}


function cnVdata(id, mode)
{
    if(mode == "innerText")
    {
        var value = document.getElementById(id).innerText;
        return value;
    }
    else
    {
        var value = document.getElementById(id).value;
        return value;
    }
}