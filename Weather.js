const apikey="2a61b5a928cacd4d07d95f54a2f7ab8c";
const apiurl=`https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;

const inputcity=document.querySelector(".search input");
const inputbtn=document.querySelector(".search button");
const weatherimg=document.querySelector(".weather-icon");
 
async function checkweatherdetails(city){
    const details=await fetch(apiurl+city+`&appid=${apikey}`);
    if(details.status==404){
        document.querySelector(".Weather_form").style.display="none";
    }
    var changes=await details.json();
    console.log(changes);
    document.querySelector(".city").innerHTML=changes.name;
    document.querySelector(".temp").innerHTML=Math.round(changes.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML=changes.main.humidity+"%";
    document.querySelector(".speed").innerHTML=changes.wind.speed+"km/h";
     
    if(changes.weather[0].main=="Clouds"){
        weatherimg.src="";
        weatherimg.src="cloudy.png";
    }
    else if(changes.weather[0].main=="Clear"){
         weatherimg.src="";
        weatherimg.src="sun.png";
    }
    else if(changes.weather[0].main=="Rain"){
        weatherimg.src="rain.png";
    }
    else if(changes.weather[0].main=="Drizzle"){
        weatherimg.src="drizzle.png";
    }
    else if(changes.weather[0].main=="Mist"){
        weatherimg.src="mist.png";
    }
    document.querySelector(".Weather_form").style.display="block";
}
inputbtn.addEventListener("click",()=>{
    checkweatherdetails(inputcity.value); 
})
