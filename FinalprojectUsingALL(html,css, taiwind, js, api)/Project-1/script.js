// https://www.themealdb.com/api/json/v1/1/search.php?f=b


const loadData = () => {

    const searchText = document.getElementById('ipt-field').value;
    console.log(searchText);
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchText}`)
    .then(res => res.json())
    .then((data) => displayData(data.meals));

}
var getIDMeal = '';
const displayData = (data) => {
    document.getElementById('total-meals').innerText = data.length;

    const mealsContainer = document.getElementById('meals-container');

    data.forEach((meal) => {
        console.log(meal)
        getIDMeal = meal.idMeal;
        const card = document.createElement('div');
        card.classList.add("box");
        card.innerHTML = `
            <img class = "box-img" src = ${meal.strMealThumb} alt = ""></img>
            <h2 class = "text-3xl">${meal?.strMeal}</h2>
            <p>${meal.strInstructions.slice(0, 50)}</p>
            <button class="btn btn-primary" onclick="ShowDetails()">Details</button>
            
        `
        mealsContainer.appendChild(card);
    });
};

function ShowDetails(){
    // console.log("dfdf");
    console.log(getIDMeal);
    // const displayModal = async(id) => {
    //     try{
    //         const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    //         const data = await response.json();
    //         console.log(data.meals[0].strCategory);
    //         document.getElementById('details').innerText = data.meals[0].strCategory;
    
    //     }
    //     catch{
    //         (err) =>
    //         {
    //             console.log(err);
    //         }
    //     }
    // }
    // displayModal(id);
    // my_modal_2.ShowDetails();
}

