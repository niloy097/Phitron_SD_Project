const names = ["Niloy", "Kabul", "Kabul", "Niloy", "Piloy"];

function removeDuplicates(nam)
{
    var uniqueNames = [];
    for(let i = 0; i < nam.length; i++)
    {
        if(uniqueNames.includes(nam[i]) == false)
        {
            uniqueNames.push(nam[i]);
        }
    }

    return uniqueNames;
}

console.log(removeDuplicates(names));
