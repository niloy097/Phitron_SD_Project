const shoppingCart = [

    {name : 'shoe', price :  1200},
    {name : 'shirt', price : 2200},
    {name : 'belt', price : 120}

];


function findTotalCost(cart)
{
    var sum = 0;
    for(let i = 0; i < cart.length; i++)
    {
        sum += cart[i].price;
    }

    return sum;
}


console.log(findTotalCost(shoppingCart));