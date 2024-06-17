import { useState } from "react";
import FormTodo from "./Form.jsx";
import jsonData from "./data.json";
import TableData from 'react-bootstrap/Table';

function Table(props) {

    const [masukItem, setMasukItem] = useState(jsonData)

    const tableRow = masukItem.map((info) => {
        return (
            <tr>
                <td>{info.date}</td>
                <td>{info.time}</td>
                <td>{info.masuk}</td>
                <td>{info.task}</td>
            </tr>
        )
    })

    const addRows = (data) => {
        const totalMasuk = masukItem.length;
        data.id = totalMasuk + 1;
        const updatedTodoItem = [...masukItem];
        updatedTodoItem.push(data);
        setMasukItem(updatedTodoItem);
    };

    return(
        <>
            <FormTodo func={addRows}></FormTodo>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <div class="p-3 mb-2 bg-primary text-white">
                            <fieldset>
                                <legend>Pemasukan Tersimpan</legend>
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