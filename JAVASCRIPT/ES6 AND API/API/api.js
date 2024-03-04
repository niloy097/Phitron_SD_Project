// fetch('https://fakestoreapi.com/products/1')
//             .then(res=>res.json())
//             .then(json=>console.log(json))
// .catch((err) => {
//     console.log(err);
// });


//formal way to fetch data-->

const loadData = async () => {
    try
    {
        const  responce = await fetch('https://fakestoreapi.com/products/1');
        const data = await responce.json();
        console.log(data);
    } catch {
        (err) => {
            console.log(err);
        }
    }
}

loadData();