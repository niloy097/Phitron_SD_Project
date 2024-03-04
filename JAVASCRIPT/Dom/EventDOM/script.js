//option 1: directly set on the HTML element
/*

    <button onclick="console.log('Button1 Clicked')">Click Me!</button>
    <button onclick="console.log('Button2 Clicked')">Click Me Again!</button>

*/

//optin 2: add onclick function on the html element
//<button onclick="makeRed()">Make RED</button>
function makeRed()
{
    document.body.style.backgroundColor = 'red';
}

//Option 3:
const makeBlue = document.getElementById('make-blue');
makeBlue.onclick = make_Blue;

function make_Blue()
{
    document.body.style.backgroundColor = 'blue';
}

//option 3: another
const purpleButton = document.getElementById('make-purple');
purpleButton.onclick = function makePurple()
{
    document.body.style.backgroundColor = 'purple';
}


//option-4:
const pinkButton = document.getElementById("make-pink");
pinkButton.addEventListener("click", makePink);

function makePink() {
  document.body.style.backgroundColor = "pink";
}

//Optin-4: Another

const greenButton = document.getElementById("make-green");
greenButton.addEventListener("click",
function makeGree()
{
  document.body.style.backgroundColor = "green";
});

//Option-4 Final:
document
  .getElementById("make-goldenrod")
  .addEventListener("click", function makeGR() {
    document.body.style.backgroundColor = "goldenrod";
  });