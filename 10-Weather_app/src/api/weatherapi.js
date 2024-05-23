const getweather =async(cities='Tuxtepec')=>{
    const apikey= import.meta.env.VITE_WEATHERAPI_KEY
    const url=`http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${cities}&aqi=no`
    const response = await fetch(url)
    const weather = await response.json()
    
    //console.log(weather)
    return weather
   }

export default getweather