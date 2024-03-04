// const loadData = async(id) => {
//     try{
//         const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
//         const data = await response.json();
//         console.log(data);

//     }
//     catch{
//         (err) =>
//         {
//             console.log(err);
//         }
//     }
// }

// const loadData = () => {

//     const searchText = document.getElementById('y').value;
//     console.log(searchText);
//     fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772`)
//     .then(res => res.json())
//     .then((data) => console.log(data));

// }

//link : https://jsonplaceholder.org/posts

// fetch('https://jsonplaceholder.org/posts')
//     .then(res => res.json())
//     .then(data => console.log(data));


const loadData = async() =>
{
    try{
        const response = await fetch(`https://jsonplaceholder.org/posts`);
        const data = await response.json();
        document.getElementById('btn-ld').addEventListener('click', function()
        {
            // console.log(data);
            const divCooment = document.getElementById('cmt-dis');
            for(let i = 0; i < data.length; i++)
            {
                const h1 = document.createElement('h1')
                h1.innerText = data[i].slug;
                divCooment.appendChild(h1);
                
            }
        })
    }
    catch{
        (err) =>
        {
            console.log(err);
        }
    }
}


loadData();