
import { Col, Row, Container } from 'react-bootstrap';
export default function Journal({ journal, journalHandle, setJournal }) {



    return (
        <div>

            <Container>
                <Row>
                    <Col>
                        <input type="text" name='entryno' value={journal.entryno} onChange={journalHandle} />
                    </Col>

                    <Col >
                        <input type="file" name='file' value={journal.file} onChange={journalHandle} />
                    </Col>

                    <Col>

                        <input type="date" name='date' value={journal.date} onChange={journalHandle} />
                    </Col>

                    <Col>
                        <input type="checkbox" name="check" checked={journal.check} onChange={() => setJournal({ ...journal, check: !journal.check })} />
                        <label for="vehicle1"> Transfer Type </label><br />
                    </Col>
                </Row>
                <br />

            </Container>


        </div>
    )
}


