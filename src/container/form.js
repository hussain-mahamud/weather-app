import React from 'react';


const Form =(props)=>{
 
        return(
            <div>
            <form  onSubmit={props.getWeather}>
                <div className="form-group">
                    <input type="text"  name='city' placeholder="Enter City" className="form-control"/>
                </div>
                <div className="form-group">
                    <input type="text"  name='country' placeholder="Enter country name" className="form-control"/>
                </div>
                
                
                <button className="btn btn-primary">Get Weather</button>
            </form>
            </div>
        )
    
}

export default Form;