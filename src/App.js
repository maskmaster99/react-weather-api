import Button from 'react-bootstrap/Button';
import './App.css';
import React from "react";
import CityInput from "./components/CityInput";
import CityWeather from "./components/CityWeather";

function App() {

  const [city , setCity] = React.useState("");
  const [data , setData] = React.useState("");

  const fetchCityWeather = () =>{
      const fetchData = fetch("http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=4c496af33d732297c30b641b3b235e47"
      )
      const jsonData = fetchData.then((response)=>{ return response.json()})
      fetchData.catch((error)=>{
        console.log("Error is" , error);
      })
      jsonData.then((result)=>{
        setData(data=>result);
        //console.log("Result is result" , result);
      })  
  }

  // console.log(data);
  return (
    
    <>
    <CityInput fetchCityWeather={fetchCityWeather} city={city} setCity={setCity}/>
    <CityWeather data={data}/>  
    </>
  );
}

export default App;
