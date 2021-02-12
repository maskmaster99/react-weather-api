import React from "react";
import { Container } from "react-bootstrap";
var outputString = "";
const ierateOverObj=(obj)=>{
    for(const property in obj){
        
        if(typeof obj[property] == "object"){
            console.log(property);
            //outputString += property +"\n";
            ierateOverObj(obj[property]);
        }
        else{
            if(!(property == 'cod' && obj[property] == '404'))
            outputString += property + ":" + obj[property] + "\n";
            console.log(property + ":" +    obj[property]);
        }
        //console.log(property + ":" + obj[property]);
    }
}

const CityWeather = ({data})=>{
    outputString = "";

    console.log(data);

    // for(const property in data){
    //     console.log(property + ":" + data[property]);
    // }
    ierateOverObj(data);

    return (
        <Container>
            <div style={{whiteSpace:"pre-wrap"}}>
            {outputString}
            </div>
        </Container>
        
        
    )

}

export default CityWeather;