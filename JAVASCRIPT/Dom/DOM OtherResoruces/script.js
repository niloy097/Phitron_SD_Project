var liCollecitns = document.getElementsByTagName('li');

for(li of liCollecitns)
{
    console.log(li);
}


var h1Collections = document.getElementsByTagName('h1');


for(h1 of h1Collections)
{
    console.log(h1.innerText);
}

var places = document.getElementsByClassName('phone');

for(place of places)
{
    console.log(place.innerText);
}
document.getElementById('place-title').innerText = "Changed by js";


//querySelector-->
//Al
var queryLi = document.querySelectorAll('.name-container li');
console.log("Getting All")
for(li of queryLi)
{
    console.log(li);
}
//Not All(First)->>
console.log("Getting First Element");
var firstEle = document.querySelector('.name-container li');
console.log(firstEle);