//General Way to squre of each element and result in newArray but same idx

// const nums = [2, 2, 5, 6];
// let temp = [];
// for(let i = 0; i < nums.length; i++)
// {
//     const element = nums[i];
//     const squre = element * element;
//     temp.push(squre);
// }
// console.log(temp);


//How map works-->
//map works in every element of the array and after 
//finishing the work it gives an array as return 
// const squre = nums.map(x => x * x);
// console.log(squre);
// function squre(val)
// {
//     return val * val;
// }
const num = [2, 4, 6, 8];

const newNum = num.map(en => en * en);

console.log(newNum);