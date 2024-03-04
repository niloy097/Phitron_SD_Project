const products = [

    {id : 1, name : "apple", price : 500, color : "golden"},
    {id : 2, name : "symphoney", price : 5008, color : "black"},
    {id : 3, name : "apple", price : 500, color : "golden"},
    {id : 4, name : "apple", price : 500, color : "red"},
];

// const result = products.forEach((pd) => console.log(pd));

const productsEle = document.getElementById('products-ele');

const result = products.forEach((pd) => {
    const h1 = document.createElement('h1');
    h1.innerText = pd.name;
    productsEle.appendChild(h1);
} );
