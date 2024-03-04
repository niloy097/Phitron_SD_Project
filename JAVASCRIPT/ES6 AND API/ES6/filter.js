const products = [

    {id : 1, name : "apple", price : 500, color : "golden"},
    {id : 2, name : "symphoney", price : 5008, color : "black"},
    {id : 3, name : "apple", price : 500, color : "golden"},
    {id : 4, name : "apple", price : 500, color : "red"},
];

const result = products.filter(pd => pd.color == "black");
console.log(result);



//Find in js-->

const result2 = products.find(pd => pd.color = "golden");

console.log(result2);