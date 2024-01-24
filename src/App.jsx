import "./App.css";
import clear from "./Assets/clear.png";
import cloud from "./Assets/cloud.png";
import drizzle from "./Assets/drizzle.png";
import rain from "./Assets/rain.png";
import snow from "./Assets/snow.png";
import humidity from "./Assets/humidity.png";
import wind from "./Assets/wind.png";
import { useState } from "react";
function App() {

  let api_key = "221d63b57189d85210b4f37b8cddfce4";
  const [icon,setIcon] = useState(cloud)
  const search = async () => {
    const element = document.getElementsByClassName("input");
    if (element[0].value === "")
    {
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=metric&appid=${api_key}`;
    let response = await  fetch(url);
    let data = await response.json(); 
    const humidity = document.querySelector('.h-percentage')
    const wind = document.querySelector(".s-meter")
    const temp = document.querySelector(".temp")
    const feelsLike = document.querySelector(".feelsLike")
    const location = document.querySelector(".location")
      humidity.innerHTML = data.main.humidity + '%';
      wind.innerHTML = data.wind.speed + 'km/h'; 
      temp.innerHTML = data.main.temp + '°C';
      feelsLike.innerHTML = "feels like " + data.main.feels_like + '°C';
      location.innerHTML = data.name;
      if(data.weather[0].icon === "01d" || data.weather[0].icon === "01n" )
      {
        setIcon(clear);
      }
      else if (data.weather[0].icon === "02d" || data.weather[0].icon === "02n")
      {
        setIcon(cloud);
      }
      else if (data.weather[0].icon === "03d" || data.weather[0].icon === "03n")
      {
        setIcon(drizzle);
      }
      else if (data.weather[0].icon === "04d" || data.weather[0].icon === "04n")
      {
        setIcon(drizzle);
      }
      else if (data.weather[0].icon === "09d" || data.weather[0].icon === "09n")
      {
        setIcon(rain);
      }
      else if (data.weather[0].icon === "10d" || data.weather[0].icon === "10n")
      {
        setIcon(rain);
      }
      else if (data.weather[0].icon === "13d" || data.weather[0].icon === "13n")
      {
        setIcon(snow);
      }
      else{
        setIcon(clear);
      }
  }
  return (
    <div className="body">
      <div className="container">
        <div className="top-bar">
          <input type="text" className="input" placeholder="Search" />

          <img onClick={()=>{search()}}
            className="image"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRThr8R6jPtVJwtT6TcJx3ms7KhlNzS_Cb1tN6iQnNJRQ&s"
            alt=""
          />
        </div>
        <div className="temp-img">
          <img src={icon} alt="" />
        </div>
        <div className="temp">24°c</div>
        <div className="feelsLike">22°C</div>
        <div className="location">London</div>
        <div className="speedHum">
          <div className="humidity">
            <img src={humidity} alt="" />
            <div className="element">
              <p className="h-percentage">87% </p>
              <p>Humidity</p>
            </div>
          </div>
          <div className="speed">
          <img src={wind} alt="" />
            <div className="element">
              <p className="s-meter">87km/h </p>
              <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )

  }

export default App;
