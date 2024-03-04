// 3
// let number = [3, 5, 1 ,6, 64, 23];
// number.sort(function(a, b)
// {
//     return b - a;
// });

// console.log(number);

// let n1 = [5, 3, 6, 1, 3];

// for(var i = 0; i < n1.length - 1; i++)
// {
//     for(var j = i + 1; j < n1.length; j++)
//     {
//         if(n1[i] > n1[j])
//         {
//             var tmp = n1[i];
//             n1[i] = n1[j];
//             n1[j] = tmp;
//         }
//     }
// }

// console.log(n1);


// 4
// var friends = ["rahim", "karim", "NaeemBiswassNiloy", "heroAlom"];

// var max = 0;
// var idx;
// for(var  i = 0; i < friends.length; i++)
// {
//     if(friends[i].length > max)
//     {
//         max = friends[i].length;
//         idx = i;
//     }
// }
// console.log(friends[idx]);

//5.
var array = [1, 2, 2, 3, 4, 4, 5];

var uniq = [];

var seen = {};

for(var i = 0; i < array.length; i++)
{
    if(!seen[array[i]])
    {
        seen[array[i]] = true;
        uniq.push(array[i]);
    }
}

var un = [...new Set(array)];
// console.log(un);

console.log(uniq);
