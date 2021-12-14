import React, { useState } from 'react';
import { Button, Col, Container,Row } from 'react-bootstrap';
import Credit from './Credit';
export default function Table() {



    const [inputFields, setInputField] = useState([
        {account:"",debit: "",credit:"",discription:""}
       
    ])

    
    const [debitButton, setDebitButton] = useState(0)
 
    const handleChange = (index,event) => {
        const values = [...inputFields];
        values[index][event.target.name] = event.target.value
        setInputField(values);
        
    }
    
   const handleSubmit = () =>{
       console.log("handlesubmit "+inputFields);
       
   }
   const handleNew = ()=>{
   let debit = [];
let sum = 0;
     setInputField([...inputFields,{account:"",debit: "",credit:"",discription:""}])
   

    // inputFields.forEach(element => {
    //     debit.push(element.debit)
    //    });
     
       
    //    console.log(debit)
    //    for (let i = 0; i < debit.length; i++) {
    //     sum += debit[i];
    //    }
    //    console.log("sum "+sum);
   }
   const handleRemove = (index)=>{
       const values = [...inputFields]
       console.log(values);
       values.splice(index, 1)
       setInputField(values)
   }
 
    return (
        <div>
             <Container>
                <Row>
                {inputFields.map((inputField,index)=>(
                        <div key={index} style={{padding: "12px;"}}>
                                 <Button className='rounded-circle' variant="primary"  onClick={handleNew}>+</Button>&nbsp;&nbsp;&nbsp;
                                <input type="text" name="account" className='col-xs-offset-2'  onChange={event => handleChange(index,event)} />
                                <input type="text" name="debit"  onChange={event => handleChange(index,event)} />
                                <input type="text" name="credit"  onChange={event => handleChange(index,event)} />
                                <input type="text" name="discription"  onChange={event => handleChange(index,event)} />
                                &nbsp;&nbsp;&nbsp;<Button className='rounded-circle' variant="danger" onClick={()=>handleRemove(index)}>-</Button>
                                <br /> <br /> 
                        </div>
                        
                    ))}
                    <Credit />
                </Row>
               
                <Button onClick={handleSubmit}  variant="success">Success</Button>{' '}
                <Button   variant="info">{debitButton}</Button>{' '}
                <Button   variant="warning">Credit</Button>{' '}
                <Button   variant="danger">balance </Button>{' '}
                </Container>
               
        </div>
    )
}
