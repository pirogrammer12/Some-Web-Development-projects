const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'bbc5b70c90msh275a3926110e04ap1d38a9jsn4428c6f948f4',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city) => {
cityName.innerHTML = city;
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then((response) =>{ 
        
        cloud_pct.innerHTML = response.cloud_pct
        temp.innerHTML = response.temp
        temprature.innerHTML = response.temp
        winds.innerHTML = response.wind_speed
        humid.innerHTML = response.humidity
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
        
        console.log(response)})
	.catch(err => console.error(err));
}

submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Agra")