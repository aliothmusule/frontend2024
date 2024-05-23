import { useEffect, useState } from "react"
import getweather from "./api/weatherapi"
import WeatherCard from './components/WeatherCard'
import Search from './components/Search'
import './assets/css/index.css'
import { useForm } from "./hooks/useForm"

function App() {
  
  const[weather, setWeather] = useState(null)
  const[city, setCity] = useState()

  useEffect(()=>{
    const apiWeather = async () => {
    setWeather(await getweather(city))}

    apiWeather()
  },[city])
  
  const [values,handleInputChange, reset] = useForm ({searchCity:""})

  
  return (
    <>
    <div className="container">
      <h1>weather app</h1>
      <hr />
      <div className="row">
      <Search
        values={values}
        handleInputChange={handleInputChange}
        reset={reset}
        city={city}
        setCity={setCity}
        />
      </div>
      <div className="row">
        <div className="col text-center"> 
        {
          weather ?
          <WeatherCard weather={weather}/>:
          <h2>loading...</h2>
        }   
    </div>
    </div>
    </div>
    </>
  )
}

export default App