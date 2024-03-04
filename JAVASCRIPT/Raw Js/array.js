// var number = [1, 2, 44, 55];


// console.log(number[2]);
// console.log(number.length);


// number.push(100);

// console.log(number);

// number.pop();

// console.log(number);


var names = ["Niloy", "Piloy", "Jiloy", "Ratul", "Katul"];
names.unshift("Tattu");
names.shift();
console.log(names);
console.log(names.slice(1, 4)); //(Strt idx, end-1 idx)
console.log(names.indexOf("Jiloy"));
console.log(names.indexOf("Xiloy"));
names.reverse();
console.log(names);
