const url = 'https://api-basketball.p.rapidapi.com/timezone';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
		'X-RapidAPI-Host': 'api-basketball.p.rapidapi.com'
	}
};

const displayData = async () =>
{
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

displayData();