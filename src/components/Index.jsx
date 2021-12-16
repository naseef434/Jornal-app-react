import React, { useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import Buttons from './Buttons'
import Credit from './Credit'
import Debit from './Debit'
import Journal from './Journal'

export default function Index() {

    const [journal, setJournal] = useState(
        {
            entryno: '',
            file: '',
            date: '',
            check: false,

        }
    )

    const handleJournalOnchange = (event) => {
        const { name, value } = event.target
        setJournal({ ...journal, [name]: value })


    }

    const [creditFields, setCreditFields] = useState([
        { account: "", debit: "", credit: "", discription: "" }
    ])
    const [debitFields, setDebitFields] = useState([
        { account: "", debit: "", credit: "", discription: "" }
    ])
    const [debitValue, setDebitValue] = useState(0)
    const [creditValue, setCreditValue] = useState(0)

    const handleChangeDebit = (index, event) => {
        const values = [...debitFields];
        values[index][event.target.name] = event.target.value
        setDebitFields(values);
        //declare an empty array for storing debit amount
        let debit = [];
        let sum = 0;
        //insert each debit element to debt arrayt
        debitFields.forEach(element => {
            debit.push(element.debit)
        });
        //finding total debit anount and set debit state 
        for (let i = 0; i < debit.length; i++) {
            sum += parseInt(debit[i]) || 0;
        }
        setDebitValue(sum)
    }

    const handleChangeCredit = (index, event) => {
        const values = [...creditFields];
        values[index][event.target.name] = event.target.value
        setCreditFields(values);
        //declare an empty array for storing debit amount
        let credit = [];
        let sum = 0;
        //insert each debit element to debt arrayt
        creditFields.forEach(element => {
            credit.push(element.credit)
        });
        //finding total debit anount and set debit state 
        for (let i = 0; i < credit.length; i++) {
            sum += parseInt(credit[i]) || 0;
        }
        setCreditValue(sum)
    }

    const handleAddDebitField = () => {
        setDebitFields([...debitFields, { account: "", debit: "", credit: "", discription: "" }])
    }

    const removeDebitField = (index) => {
        const values = [...debitFields]
        values.splice(index, 1)
        setDebitFields(values)
    }

    const handleAddCreditField = () => {
        setCreditFields([...creditFields, { account: "", debit: "", credit: "", discription: "" }])
    }

    const removeCreditField = (index) => {
        const values = [...creditFields]
        values.splice(index, 1)
        setCreditFields(values)
    }


    const saveData = (event) => {
        let body = {
            ...journal,
            debit: debitFields,
            credit: creditFields
        }
        console.log(body);

    }
    // console.log(journal);
    return (
        <>
            <div>
                <Journal journal={journal} setJournal={setJournal} journalHandle={handleJournalOnchange} />
                <Container>
                    <Row>
                        <Debit inputFields={debitFields} handleChange={handleChangeDebit} handleRemove={removeDebitField} handleAddField={handleAddDebitField} />
                        <Credit inputFields={creditFields} handleChange={handleChangeCredit} handleRemove={removeCreditField} handleAddField={handleAddCreditField} />
                    </Row>

                    <Buttons creditValue={creditValue} debitValue={debitValue} isEqual={creditValue === debitValue ? true : false} save={saveData} />
                </Container>

            </div>
        </>
    )
}
