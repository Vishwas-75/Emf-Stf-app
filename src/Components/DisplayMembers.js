import React, { useState } from "react";
import FullEmpDetails from "./FullEmpDetails";
import FullStfDetails from "./FullStfDetails";
import Modal from "react-modal";
import { employee } from "./Data";
import {staff} from './Data'
import { useSelector} from  'react'
// import r}utton, Modal } from "reactstrap";

function DisplayMembers(props) {
  const [empDetails, setEmpDetails] = useState([]);
  const [stfDetails, setStfDetails] = useState([]);
  const [click, setClick] = useState(null);
  const [isOpen1, setOpen1] = useState(false);
  const [isOpen2, setOpen2] = useState(false);
  const [employe, setEmploye] = useState({ DeptId: "" });
  const[stf,setStf]=useState({DeptId:''})
  const isAdmin=useSelector(state=>state.isAdmin)

  console.log(isAdmin)
  const handleEmpDetails = (e) => {
    setEmpDetails(props.emps.filter((emp) => emp.EmpId === e));
    // console.log(e);
    // console.log(empDetails);
    setClick(true);
  };
  const handleStfDetails = (e) => {
    setStfDetails(props.stfs.filter((stf) => stf.StfId === e));
    // console.log(stfDetails);
    setClick(false);
  };
  const handleAddEmp = (deptId) => {
   
    setOpen1(true);
    setEmploye({ ...employe, DeptId: deptId, EmpId: employee.length + 1 });
  };
  const handleAddStf = (deptId) => {
    setOpen2(true);
    setStf({...stf,DeptId:deptId,StfId:staff.length+1})
  };
  

  const handleFields = (e) => {
    const val = e.target.value;
    setEmploye({ ...employe, [e.target.name]: val });
  
  };
   const handlestfFields=(e)=>{
    const val = e.target.value;
    setStf({...stf,[e.target.name]:val})

   }
   const handleAddingEmp=()=>
   {
     
   
    setOpen1(false);
    if(employe.Fname!==undefined && employe.Email!==undefined)
    {
     employee.push(employe)
     props.handleDepartment(employe.DeptId)
     setEmploye({})

    }
   }

   const handleAddingStf=()=>
   {
    setOpen2(false);
    if(stf.Fname!==undefined && stf.Email!==undefined)
    {
     staff.push(stf)
     props.handleDepartment(stf.DeptId)
     setStf({})
     
   }

   }
   const handleCancelEmp=()=>
   {
    setOpen1(false);
   }
   const handleCancelStf=()=>
   {
    setOpen2(false);
   }

  return (
    <div class="main_div_display">
      <div class="div_display">
        <h1 class="main_div_details_h1">
           Employes of Department {props.value}
        </h1>
        <button
         class="btn_dep_add"
          onClick={() => {
            handleAddEmp(props.value);
          }}
        >
          Add New Employee
        </button>
        <div class="table_div">
        <table rules="all" border="1px">
          <tr>
            <th>EmpID</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>DeptId</th>
          </tr>
          {props.emps.map((emp) => {
            return (
              <tr>
                <td
                  onClick={() => {
                    handleEmpDetails(emp.EmpId);
                  }}
                >
                  {emp.EmpId}
                </td>
                <td>{emp.Fname}</td>
                <td>{emp.Lname}</td>
                <td>{emp.DeptId}</td>
              </tr>
            );
          })}
        </table>
        </div>
        <Modal className="model_style_member" isOpen={isOpen1}>
          {/* <input class="add_input" value={employee.DeptId} onChange={(e)=>handleFields(e)} name="deptId" type="number" value="" placeholder="DeptId" /> */}

          <input
            class="add_input"
            value={employee.Fname}
            onChange={(e) => handleFields(e)}
            name="Fname"
            type="text"
            placeholder="Frist Name"
          />

          <input
            class="add_input"
            value={employee.Lname}
            onChange={(e) => handleFields(e)}
            name="Lname"
            type="text"
            placeholder="Last Name"
          />

          <input
            class="add_input"
            value={employee.Email}
            onChange={(e) => handleFields(e)}
            name="Email"
            type="email"
            placeholder="Email"
          />

          <input
            value={employee.ph}
            name="ph"
            class="add_input"
            type="number"
            maxLength="10"
            minLength="10"
            placeholder="Phone Number"
            onChange={(e) => handleFields(e)}
          />

          <input
            name="place"
            value={employee.place}
            class="add_input"
            type="text"
            placeholder="Location"
            onChange={(e) => handleFields(e)}
          />
          <button class="add_btn" onClick={() => handleAddingEmp()}>
            Add
          </button>
          <button class="add_btn" style={{display:"inline"}} onClick={() => handleCancelEmp()}>
            Cancel
          </button>
        </Modal>
        <Modal className="model_style_member" isOpen={isOpen2}>
          <input
            class="add_input"
            value={staff.Fname}
            onChange={(e) => handlestfFields(e)}
            name="Fname"
            type="text"
            placeholder="Frist Name"
          />

          <input
            class="add_input"
            value={staff.Lname}
            onChange={(e) => handlestfFields(e)}
            name="Lname"
            type="text"
            placeholder="Last Name"
          />

          <input
            class="add_input"
            value={staff.Email}
            onChange={(e) => handlestfFields(e)}
            name="Email"
            type="email"
            placeholder="Email"
          />

          <input
            value={staff.ph}
            name="ph"
            class="add_input"
            type="number"
            maxLength="10"
            minLength="10"
            placeholder="Phone Number"
            onChange={(e) => handlestfFields(e)}
          />

          <input
            name="place"
            value={staff.place}
            class="add_input"
            type="text"
            placeholder="Location"
            onChange={(e) => handlestfFields(e)}
          />
          <button class="add_btn" onClick={() => handleAddingStf()}>
            Add
          </button>
          <button class="add_btn" style={{display:"inline"}} onClick={() => handleCancelStf() }>Cancel</button>
        </Modal>
        <h1 class="main_div_details_h1">Staffs of Department {props.value}</h1>
        <button  class="btn_dep_add" onClick={()=>handleAddStf(props.value)}>Add New Staff</button>
        <table rules="all" border="1px">
          <tr>
            <th>StfID</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>DeptId</th>
          </tr>
          {props.stfs.map((stf) => {
            return (
              <tr>
                <td
                  onClick={() => {
                    handleStfDetails(stf.StfId);
                  }}
                >
                  {stf.StfId}
                </td>
                <td>{stf.Fname}</td>
                <td>{stf.Lname}</td>
                <td>{stf.DeptId}</td>
              </tr>
            );
          })}
        </table>
      </div>
      {click ? (
        <FullEmpDetails
          click={click}
          empDetails={empDetails}
          employeID={employe.EmpId}
        />
      ) : (
          <FullStfDetails stfDetails={stfDetails} />
        )}
    </div>
  );
}

export default DisplayMembers;
