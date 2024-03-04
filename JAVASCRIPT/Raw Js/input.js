// 1.

// process.stdin.setEncoding('utf8');

// console.log("Enter numbers (space-separated):");

// process.stdin.on('data', function(data) {
//     const input = data.trim();
//     const array = input.split(' ').map(Number);
//     var val = array;
//     // console.log(val);
//     var sum = 0;
//     for(var i = 0; i < val.length; i++)
//     {
//         sum += val[i];
//     }
//     console.log(sum);
//     process.exit();
// });

// function getEven(array)
// {
//     even = [];
//     for(var i = 0; i < array.length; i++)
//     {
//         if(array[i] % 2 == 0) even.push(array[i]);

//     }

//     return even;
// }
// array = [1, 2, 3, 4, 5, 6];

// console.log(getEven(array));


//writing a function that revers a string-->

function revStr(string)
{
    var ansStr = [];
    for(var i = string.length-1; i >= 0 ; i--)
    {
        ansStr.push(string[i]);
    }

    return ansStr;
}


console.log(revStr("Niloy"));

