import React ,{useState} from 'react'
import { Button,Col,Row, Container,InputGroup,FormControl } from 'react-bootstrap';
export default function Journal() {
    
    const [journal, setJournal] = useState(
        {
            entryno: '',
            file: '',
            date: '',
            check: false,

        }
    )



    const handleOnchange = (event) => {
        const {name, value} = event.target
        setJournal({...journal, [name]: value})
        
        
    }
    console.log(journal);
    
    return (
        <div>
         
            <Container>
                <Row>
                    <Col>
                    <input type="text" name='entryno' value={journal.entryno} onChange={handleOnchange} />
                    </Col>
                    
                    <Col >
                        <input type="file" name='file' value={journal.file} onChange={handleOnchange} /> 
                    </Col>
                    
                    <Col>
                       
                        <input type="date" name='date' value={journal.date} onChange={handleOnchange}/>
                    </Col>
                        
                    <Col>
                    <input type="checkbox"  name="check"  checked={journal.check} onChange={()=> setJournal({...journal, check:!journal.check})}/>
                    <label for="vehicle1"> Transfer Type </label><br />
                    </Col>
                </Row>
                <br />
                
            </Container>
           
                        
        </div>
    )
}


