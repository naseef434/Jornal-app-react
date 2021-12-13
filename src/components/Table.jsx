import React, { useState } from 'react';
import { Button, Col, Container,Row } from 'react-bootstrap';
export default function Table() {

    const [inputFields, setInputField] = useState([
        {account:"",debit: ""},
       
    ])

 
    const handleChange = (index,event) => {
        const values = [...inputFields];
        values[index][event.target.name] = event.target.value
        setInputField(values);
    }
    
   const handleSubmit = () =>{
       console.log(inputFields);
   }
   const addNew = ()=>{
       setInputField([...inputFields,{firstname:"",lastName:""}])
   }
    return (
        <div>
             <Container>
                <Row>
                {inputFields.map((inputField,index)=>(
                        <div key={index}>
                            <Col> 
                                <input type="text" name="account" id={index+"account"} onChange={event => handleChange(index,event)} />
                            </Col>
                            <Col>
                                <input type="text" name="debit" id={index+"debit"} onChange={event => handleChange(index,event)} />
                            </Col>
                            
                        </div>
                    ))}
                </Row>
                <Button variant="primary">Primary</Button>
                <Button variant="secondary" onClick={addNew}>Secondary</Button>{' '}
                <Button onClick={handleSubmit}  variant="success">Success</Button>{' '}
                </Container>

        </div>
    )
}
