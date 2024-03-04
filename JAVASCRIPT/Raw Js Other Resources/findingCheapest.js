const phones = [
    {name : "iPhone", camera : 12, storage : '32gb', price : 120000, color : 'silver'},
    {name : "Bluphone", camera : 11, storage : '32gb', price : 12000, color : 'gold'},
    {name : "Samsung", camera : 16, storage : '64gb', price : 87000, color : 'gray'},
    {name : "Xiaomi", camera : 48, storage : '32gb', price : 15000, color : 'space Garay'},
    {name : "Oppo", camera : 12, storage : '32gb', price : 12010, color : 'silver'},
    {name : "Vivo", camera : 12, storage : '12gb', price : 30000, color : 'yellow'},
];

//find the cheapest phon in the list of object-->>

function getCheapest(phones)
{
    var phnObj = {};
    var min = 90000000;
    for(let i = 0; i < phones.length; i++)
    {
        if(phones[i].price < min)
        {
            phnObj = phones[i];
            min = phones[i].price;
        }
    }

    return phnObj;
}

console.log(getCheapest(phones));