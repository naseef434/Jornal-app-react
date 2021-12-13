import React from 'react'
import { Button, Container } from 'react-bootstrap';
export default function Table() {

    function addRow() {
        var table = document.getElementById("dataTable");
        var rowCount = table.rows.length;
        var row = table.insertRow(rowCount);
        var cell1 = row.insertCell(0);
        var button = document.createElement('button')
        button.innerHTML = "Remove"
        button.onclick = function () {
            deleteRow('dataTable')
        }
        cell1.appendChild(button)

        var cell2 = row.insertCell(1);
        var element2 = document.createElement("input");
        element2.type = "text";
        element2.id = "account";
        element2.setAttribute('placeholder', "account")
        cell2.appendChild(element2);

        var cell2 = row.insertCell(2);
        var element2 = document.createElement("input");
        element2.type = "text";
        element2.id = "debit" + rowCount;;
        element2.setAttribute('placeholder', "debit")
        cell2.appendChild(element2);

       

        var cell5 = row.insertCell(3)
        var button = document.createElement("button")
        button.innerHTML = 'Add';
        button.onclick = function () {
            addRow('dataTable')
        }
        cell5.appendChild(button)


    }
    function deleteRow(tableID) {

        var table = document.getElementById("dataTable");
        for (let i = 0; i < table.rows.length; i++) {
            table.rows[i].onclick = function () {
                var index = this.rowIndex;
                table.deleteRow(index)
            }


        }
    }
    function getDebit() {
        var debt = [];
        var table = document.getElementById("dataTable");
        for (let i = 0; i < table.rows.length; i++) {
            console.log("Row :" + i);

            var x = document.getElementById("debit" + i).value;
            debt.push(x)
            console.log(x);

        }

    }
    return (
        <div>
            <Container>
                <table id="dataTable" width="350px" >

                </table>
                <Button onClick={addRow} variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>{' '}
                <Button onClick={getDebit} variant="success">Success</Button>{' '}
            </Container>

        </div>
    )
}
