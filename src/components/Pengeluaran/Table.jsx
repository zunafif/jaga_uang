import { useState } from "react";
import FormKeluar from "./Form.jsx";
import jsonData from "./data.json";
import TableData from 'react-bootstrap/Table';

function Table(props) {

    const [keluarItem, setKeluarItem] = useState(jsonData)

    const tableRow = keluarItem.map((info) => {
        return (
            <tr>
                <td>{info.date}</td>
                <td>{info.time}</td>
                <td>{info.keluar}</td>
                <td>{info.task}</td>
            </tr>
        )
    })

    const addRows = (data) => {
        const totalKeluar = keluarItem.length;
        data.id = totalKeluar + 1;
        const updatedTodoItem = [...keluarItem];
        updatedTodoItem.push(data);
        setKeluarItem(updatedTodoItem);
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
                                                <th>Uang Keluar</th>
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