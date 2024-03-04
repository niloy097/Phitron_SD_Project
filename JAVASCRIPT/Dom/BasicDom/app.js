//selector in javascript

var h1 = document.getElementsByTagName("h1");
// console.log(h1);

var text = document.getElementById("text").style.color = "red";

document.getElementById("text").style.removeProperty("color");
// console.log(text);

var child = document.getElementsByClassName("child");
// console.log(child[1]);

//getting attributes
var img = document.getElementById("img");
console.log(img.getAttribute("src"));

//setting attributes
img.setAttribute("alt", "Gamla Pic");

//getting alt-->
console.log(img.getAttribute("alt"));

//adding class list-->
img.classList.add("testClass");
console.log(img);


//getting innertext
var hero = document.getElementById("hero");
console.log(hero.innerText);

var input = document.getElementById("input");
console.log(input.value);


//getting innerHTML
var x = document.getElementById("cur").innerHTML;
console.log(x);


var testDiv = document.getElementsByClassName("test");
// console.log(testDiv[0].childNodes[1].parentNode.parentNode.parentNode.childNodes[5]);


//Creating Element

var nD = document.getElementById("newDiv");

var p = document.createElement("p");

p.innerText = "TEsting PPPPP";

nD.appendChild(p);

function addElement()
{
    var p1 = document.createElement("p");
    p1.innerText = "Goru chor tui";
    nD.appendChild(p1);
}

for(var i = 0; i < 5; i++)
{
    addElement();
}

// adding Event Listener-->
document.getElementById("submit-btn").addEventListener("click", function(e)
{
    console.log("yes bosss");
    
});

//--->getting value form input filed
document.getElementById("sub").addEventListener("click", function(e)
{
    var inputValue = document.getElementById("dekhi").value;
    console.log(inputValue);
});

document.getElementById("input").addEventListener("blur", function(e)
{
    console.log(e.target.value);
})


//Shotest version here and realted tag inside
// document.getElementById("ipt").addEventListener("blur",inputChange); --> onblur attributes in input tag

function inputChange(e)
{
    console.log("Hellow Baby");
}

