function revStrWords(str)
{
    var words = str.split(' ');
    const res = [];
    for(let i = words.length - 1; i >= 0; i--)
    {
        res.push(words[i]);
    }

    return res;
}

console.log(revStrWords("I am a good boy"));