let city = document.querySelector("#cityInput");
let sbtn = document.querySelector("#searchBtn");
let load = document.querySelector("#loading");

let error = document.querySelector("#error");
let cityname = document.querySelector("#cityName");
let temp = document.querySelector("#temperature");
let weatherDescription = document.querySelector("#weatherDescription");
let feelsLike = document.querySelector("#feelsLike");
let humidity = document.querySelector("#humidity");
let wind = document.querySelector("#wind");

sbtn.addEventListener("click",function(){
    const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city.value)}&count=1`;
    fetch(geoUrl).then(function(rawdata){
        return rawdata.json();
    }).then(function(data){ 
        let latitude = data.results[0].latitude;
        let longitude = data.results[0].longitude;
        cityname.textContent = data.results[0].name;
        const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m`;
        console.log(latitude,longitude); 
        fetch(weatherUrl).then(function(rawdataw){
            return rawdataw.json();
        }).then(function(datav){
            console.log(datav);
            let current = datav.current;
            temp.textContent = current.temperature_2m;
            feelsLike.textContent = `${current.apparent_temperature}°C`;
            humidity.textContent = `${current.relative_humidity_2m}%`;
            wind.textContent = `${current.wind_speed_10m} km/h`;
            const getweather = (code)=>{
                if (code===0) return "Clear sky";
                else if (code===1) return "Mainly clear";
                else if (code===2) return "Partly cloudy";
                return "Unknown weather";
            }
            weatherDescription.textContent = getweather(current.weather_code);

        }).catch(function(err){
            console.log(err);
        })

    }).catch(function(err){
        console.log(err);  
    })
})