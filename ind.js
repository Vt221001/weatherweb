
const apikey = "3e6d298bd29e55356e50b5b3e35a8486";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox =  document.querySelector("input");
const searchBtn = document.querySelector("button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const res = await fetch(apiurl + city + `&appid=${apikey}`);
     
    if(res.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{

        let data = await res.json();

    //console.log(data);
    document.querySelector(".error").style.display = "none";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";


    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png"; 
     }
     
     else if(data.weather[0].main == "clear"){
         weatherIcon.src = "images/clear.png";
     }
     
     else if(data.weather[0].main == "Rain"){
         weatherIcon.src = "images/rain.png";
     }
     else if(data.weather[0].main == "Drizzle"){
         weatherIcon.src = "images/drizzle.png";
     }
     else if(data.weather[0].main == "Mist"){
         weatherIcon.src = "images/mist.png";
     }

     document.querySelector(".weather").style.display ="block";

    }
    
}





searchBtn.addEventListener("click",()=>{
    checkWeather(searchbox.value);
    //console.log(searchbox.value);
})

checkWeather();

