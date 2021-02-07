import './App.css';
import React from 'react';
import Titles from './container/title';
import Form from './container/form';
import WeatherComponent from './container/weather';
const API_KEY="fe1c58904837e53c5703b108c1eaa92a";
class App extends React.Component{
//api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid={API_KEY}
state={
  temperature:'',
  city:'',
  country:'',
  humidity:'',
  description:'',
  error:''
}
  getWeather=async(e)=>{
    e.preventDefault();
    const city=e.target.elements.city.value;
    const country=e.target.elements.country.value;
    if(city && country){
      const api=await fetch (`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);  
      const data=await api.json();
      console.log(data);
      this.setState({
        temperature:data.main.temp-273.15,
        city:data.name,
        country:data.sys.country,
        humidity:data.main.humidity,
        description:data.weather[0].description,
        error:''

    })
  }
    else{
      alert("Provide all info")
     this.setState({
      temperature:'',
      city:'',
      country:'',
      humidity:'',
      description:'',
      error:'Please Provide Valid Data'
     })
       
      }
    
    
     
  }
 render(){
  return (
    <div className="App form col-md-4 offset-sm-4">
     <div className="container app-data"> 
    <Titles></Titles>
     <Form getWeather={this.getWeather}/>
               <WeatherComponent
               temperature={this.state.temperature}
               city={this.state.city}
               country={this.state.country}
               humidity={this.state.humidity}
               description={this.state.description}
               error={this.state.error}
               
               
               
               
               />
          
    </div>
 </div>
 
   );
 }
  
}

export default App;
