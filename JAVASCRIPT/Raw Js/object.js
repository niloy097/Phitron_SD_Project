var person = {
    name : "Niloy",
    age : 23,
    class : 'A'
};

console.log(person);
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

console.log(person.name);


//Nested Object

var car = 
{
    Name: "Ferrari",
    color : "Red",
    tire : 4,
    seat : 
    {
        classA : 4,
        classB : 5,
    }
};


console.log(car.seat.classA);