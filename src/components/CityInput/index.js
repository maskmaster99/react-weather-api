import { Button, Container } from "react-bootstrap";
import React from "react";
import { Form } from "react-bootstrap";

const CityInput = ({city , setCity  , fetchCityWeather})=>{
    const [error , setError] = React.useState("");

    const handleInputChange = (event) =>{
        setCity(event.target.value);
    }

    const handleSubmit = ()=>{
        if(!city){
            setError("City Field is Empty");
        }
        else{
            setError("");
            //make API call
            fetchCityWeather();

        }

    }

    return (
        <Container>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>City</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Enter city" 
                    onChange={handleInputChange} 
                    value={city}
                    />
                    <p className="text-danger">{error}</p>
                </Form.Group>


                <Button variant="primary" onClick={handleSubmit}>
                Submit
                </Button>
            </Form>
        </Container>
        
    )

}

export default CityInput;