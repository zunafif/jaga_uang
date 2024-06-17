import { useState } from "react";

function Form(props) {

    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [simpan, setSimpan] = useState('')
    const [btnText, setBtnText] = useState('')
    const [task, setTask] = useState('')

    const changeDate = (e) => {
        setDate(e.target.value)
    }
    const changeTime = (e) => {
        setTime(e.target.value)
    }
    const changeTask = (e) => {
        setTask(e.target.value)
    }
    const changeMasuk = (e) => {
        setSimpan(e.target.value)
    }

    const handleClikButton = () => {

        event.preventDefault()
        const val = { date, time, simpan, task}
        props.func(val)
        clear()

        setBtnText('Berhasil Dikirim !')
        setTimeout(() => {
            setBtnText('')
        }, 1000);
    }
    
    const clear = () => {
        setDate('')
        setTime('')
        setSimpan('')
        setTask('')
    }

    return(
        <>
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="p-3 mb-2 bg-primary-subtle text-primary-emphasis">
                            <fieldset>
                                <legend>Input Tabungan</legend>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Tanggal</label>
                                    <input type="date" class="form-control" id="exampleFormControlInput1" placeholder="0000/00/00"
                                    value={date} onChange={changeDate}/>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput2" class="form-label">Jam</label>
                                    <input type="time" class="form-control" id="exampleFormControlInput2" placeholder="00:00"
                                    value={time} onChange={changeTime}/>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput3" class="form-label">Uang Disimpan</label>
                                    <input type="number" class="form-control" id="exampleFormControlInput3" placeholder="0"
                                    value={simpan} onChange={changeMasuk}/>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">Note</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                                     value={task} onChange={changeTask}></textarea>
                                </div>
                                <button id="myBtn" type="button" class="btn btn-primary"
                                onClick={
                                    handleClikButton
                                    }>
                                    Submit
                                </button>
                                <p><span>{btnText}</span></p>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form