import { useState } from "react";
import FormKeluar from "./Form.jsx";
import jsonData from "./data.json";
import TableData from 'react-bootstrap/Table';

function Table(props) {

    const [simpanItem, setSimpanItem] = useState(jsonData)

    const tableRow = simpanItem.map((info) => {
        return (
            <tr>
                <td>{info.date}</td>
                <td>{info.time}</td>
                <td>{info.simpan}</td>
                <td>{info.task}</td>
            </tr>
        )
    })

    const addRows = (data) => {
        const totalSimpan = simpanItem.length;
        data.id = totalSimpan + 1;
        const updatedTodoItem = [...simpanItem];
        updatedTodoItem.push(data);
        setSimpanItem(updatedTodoItem);
    };

    return(
        <>
            <FormKeluar func={addRows}></FormKeluar>
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="p-3 mb-2 bg-primary text-white">
                            <fieldset>
                                <legend>Pengeluaran Tersimpan</legend>
                                    <TableData striped bordered hover>
                                        <thead>
                                            <tr>
                                                <th>Date</th>
                                                <th>Time</th>
                                                <th>Uang Disimpan</th>
                                                <th>Keterangan</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {tableRow}
                                        </tbody>
                                    </TableData>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Table