import React,{useState} from "react";
import {staff} from 'react';
import {employee} from 'react'

function FullDetails(props) {
  const [click,setClick]=useState('')
  console.log(props)
  const [newChange,setNewChange]=useState({DeptId:props.empDetails[0].DeptId,EmpId:props.empDetails[0].EmpId,Fname:props.empDetails[0].Fname,Lname:props.empDetails[0].Lname,Email:props.empDetails[0].Email,ph:props.empDetails[0].ph,place:props.empDetails[0].place})
 console.log(newChange)
 
  const handleChange = (e) => {
  const index=  employee.findIndex((emp)=>{return emp.EmpId===props.empDetails[0].EmpId})
  

 

    setClick(e.target.id)
    return (
      <input/>
    )
  };
  return (
    <div class="main_div_details">
      <h1 class="main_div_details_h1">Full Details</h1>
      <table rules="all" border="1px">
        <tr class="fd_data">
          <th>EmpID:</th> <td >{props.empDetails[0].EmpId}</td>{" "}
        </tr>
        <tr class="fd_data">
          <th>FirstName:</th>{" "}
          <td id='1' onClick={(e) => handleChange(e)}>{props.empDetails[0].Fname}</td>
        </tr>
        <tr class="fd_data">
          <th> LastName:</th>{" "}
         {click==='2'?<input type="text" value=""/>:<td id='2' onClick={(e) => handleChange(e)}>{props.empDetails[0].Lname} {}</td>}
        </tr>
        <tr class="fd_data">
          <th>Email:</th>{" "}
          <td id='3' onClick={(e) => handleChange(e)}>{props.empDetails[0].Email}</td>
        </tr>
        <tr class="fd_data">
          <th>Phone:</th>{" "}
          <td id='4' onClick={(e) => handleChange(e)}>{props.empDetails[0].ph}</td>
        </tr>
        <tr class="fd_data">
          <th> Place:</th>{" "}
          <td id='5' onClick={(e) => handleChange(e)}>{props.empDetails[0].place}</td>
        </tr>
      </table>
    </div>
  );
}

export default FullDetails;
