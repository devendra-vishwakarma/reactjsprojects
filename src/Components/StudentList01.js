import React, { useState, useRef } from "react";
import Data from "../Data";

export default function StudentList01() {
    const [defaultBranch, setDefaultBranch] = useState("all");;
    const [Datas, updateData] = useState(Data);
    const [MechNum, setMechNum] = useState(0);
    const [CSNum, setcsNum] = useState(0);
    const [ITNum, setITNum] = useState(0);
    const [EENum, setEENum] = useState(0);

    let NameInputref = useRef();
    let Mobile_number = useRef();
    let Roll_No = useRef();
    let Branch = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
    };
    const deleteRecord = (Roll_No) => {
        if (window.confirm("Are you Sure ?")) {
            let index = Datas.findIndex(student => student.roll === Roll_No)
            Datas.splice(index, 1);
            let arr = [...Datas]
            console.log(arr)
            updateData(arr)
        }
    }
    const addRecord = () => {
        let name = NameInputref.current.value;
        let roll = Roll_No.current.value;
        let branch = Branch.current.value;
        let mobile = Mobile_number.current.value

        let newRecord = { name, roll, branch, mobile }

        let arr = [...Datas, newRecord]
        updateData(arr);
        // window.alert("added Succesfully")
    }
    return <>
        <div className='text-center bg-danger text-white p-4'>
            <h1>StudentList</h1>
        </div>
        <div className='box mt-4'>
            <form action="/action_page.php" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Enter Your Name:</label>
                    <input
                        ref={NameInputref}
                        type="text"
                        className="form-control borderss"
                        placeholder="Enter Your Name"
                        id="email"
                    />
                </div>
                <hr />
                <div className="form-group">
                    <label htmlFor="pwd">Roll_No:</label>
                    <input
                        ref={Roll_No}
                        type="text"
                        className="form-control borderss"
                        placeholder="Enter Roll_No"
                        id="pwd"
                    />
                </div>
                <hr />
                <div className="form-group">
                    <label htmlFor="pwd">Mobile_No</label>
                    <input
                        ref={Mobile_number}
                        type="text"
                        className="form-control borderss"
                        placeholder="Enter Your Mobile Number"
                        id="pwd"
                    />
                </div>
                <hr />
                <div className='form-group '>
                    <select class="form-select borderss pl-5 pr-5" ref={Branch}>
                        <option value={"ME"}>ME</option>
                        <option value={"EE"}>EE</option>
                        <option value={"CS"}>CS</option>
                        <option value={"IT"}>IT</option>
                    </select>
                </div>
                <hr />
                <div className="form-group form-check">
                    <label className="form-check-label">
                        <input className="form-check-input" type="checkbox" /> Remember me
                    </label>
                </div>
                <div>
                    <button type="submit" className="btn btn-success" onClick={addRecord}>
                        Add-Student
                    </button>
                </div>
            </form>
        </div>
       
        <div className="col-md-6 d-flex mt-5 mb-5 ">
            <button onClick={() => setDefaultBranch("CS")} className="btn btn-primary ml-2">CS : ({Datas.filter(student => student.branch === "CS").length})</button>
            <button onClick={() => setDefaultBranch("IT")} className="btn btn-danger ml-2">IT : ({Datas.filter(student => student.branch === "IT").length})</button>
            <button onClick={() => setDefaultBranch("EC")} className="btn btn-info ml-2">EC : ({Datas.filter(student => student.branch === "EC").length})</button>
            <button onClick={() => setDefaultBranch("MECH")} className="btn btn-warning ml-2">MECH : ({Datas.filter(student => student.branch === "MECH").length})</button>
            <button onClick={() => setDefaultBranch("all")} className="btn btn-secondary ml-2">Total : ({Datas.length})</button>
        </div>

        <table className='table text-center'>
            <thead>
                <th>S.No</th>
                <th>Name</th>
                {/* <th>Tittle</th> */}
                <th>Mobile_No</th>
                <th>Branch</th>
                <th>Roll_No</th>
                <th>Delete</th>
            </thead>
            <tbody>
                {Datas.map((data, index) => <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{data.name}</td>
                    <td>{data.branch}</td>
                    <td>{data.mobile}</td>
                    <td>{data.roll}</td>
                    <td><button className='btn btn-danger' onClick={() => deleteRecord(data.roll)}>Delete</button></td>
                </tr>
                )}

            </tbody>
        </table>
    </>
}