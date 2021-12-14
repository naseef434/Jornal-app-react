import React, { useState } from 'react';
import { Button, Col, Container,Row } from 'react-bootstrap';
export default function Credit() {
    
    const [creditFields, setCreditField] = useState([
        {account:"",debit: "",credit:"",discription:""}
       
    ])
    const handleNewCredit = ()=>{
        setCreditField([...creditFields,{account:"",debit: "",credit:"",discription:""}])
    }
    
    return (
        <>
        {creditFields.map((creditField,index)=>(
                        <div key={index} style={{margin: "20px"}}>
                                 <Button className='rounded-circle' variant="warning"  onClick={handleNewCredit}>+</Button>&nbsp;&nbsp;&nbsp;
                                <input type="text" name="account" className='col-xs-offset-2' />
                                <input type="text" name="debit"   />
                                <input type="text" name="credit"   />
                                <input type="text" name="discription"  />
                                &nbsp;&nbsp;&nbsp;<Button className='rounded-circle' variant="danger" >-</Button>
                                 
                        </div>
                        
                    ))}
             

        </>
                     
        
    )
}
