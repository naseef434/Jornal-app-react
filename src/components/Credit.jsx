import React from 'react'
import { Button } from 'react-bootstrap'

export default function Credit({ inputFields, handleChange, handleAddField, handleRemove }) {
    return (
        <>
            {inputFields.map((inputField, index) => (
                <div key={index} style={{ margin: "15px" }}>
                    <Button className='rounded-circle' variant="warning" onClick={handleAddField}>+</Button>&nbsp;&nbsp;&nbsp;
                    <input type="text" name="account" className='col-xs-offset-2' onChange={event => handleChange(index, event)} />
                    <input type="text" name="debit" onChange={event => handleChange(index, event)} />
                    <input type="text" name="credit" onChange={event => handleChange(index, event)} />
                    <input type="text" name="discription" onChange={event => handleChange(index, event)} />
                    &nbsp;&nbsp;&nbsp;<Button className='rounded-circle' variant="danger" onClick={() => handleRemove(index)}>-</Button>
                    <br /> <br />
                </div>
            ))}
        </>
    )
}
