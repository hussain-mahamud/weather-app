import React from 'react';

const Weather =(props)=>{
   
        return(
            <>
            <hr/>
            <div className="result-div">
                {
                    props.temperature  && <p>Temperature: {props.temperature.toFixed(2)}  </p>
                }
                 {
                    props.humidity  &&   <p>Humidity: {props.humidity}</p>  
                }
                 {
                    props.description  && <p> Description: {props.description} </p>  
                }
                
                 {
                    props.city  &&  <p> City:{props.city}  </p>  
                }
                 {
                    props.country  &&   <p> Country: {props.country} </p>
                }

                {
                    props.error  &&     <p>  Error:  {props.error}</p>
                }
        
      
            </div>
            </>
        )
    
}

export default Weather;