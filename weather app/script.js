const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '91f0e37409mshce68d06d99f5a1ap17779ajsn2ccfc4a67fc9',
        'x-rapidapi-host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

async function fetchWeather() {
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

// Call the async function
fetchWeather();
