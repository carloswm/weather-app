import React,{useState, useEffect} from 'react'

function WeatherFetch() {
    const key = 'fa957251e8e62d75cf3180dd52d55152'
    const [feels_like, setFeelsLike] = useState('')
    const [mainTemp, setMainTemp] = useState('')
    const [description, setDescription] = useState('')
    const [main, setMain] = useState('')
    const [iconID, setIconID] = useState('')
    const [windSpeed, setWindSpeed] = useState('')
    useEffect(() => {
      fetch(
        'https://api.openweathermap.org/data/2.5/weather?q=Karachi,pk&APPID=' +key+ '&units=metric'
      )
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setFeelsLike(data.main.feels_like)
        setMainTemp(data.main.temp)
        setDescription(data.weather[0].description)
        setMain(data.weather[0].main)
        setIconID(data.weather[0].icon)
        setWindSpeed(data.wind.speed)
      })
    },[])
    return (
      <>
      <h1 >Main Temperature : {mainTemp} Degrees Celsius</h1>
      <h1>Feels like: {feels_like} Degrees Celsius</h1>
      <h1>Weather Parameter: {main}</h1>
      <h1>Description : {description}</h1>
      <h1>Wind Speed: {windSpeed}</h1>
      <img alt="iconID" src={"http://openweathermap.org/img/wn/" + iconID + "@2x.png"} />
      </>
    )
}

export default WeatherFetch;