import React,{useState} from 'react'
import {department} from './Data'
import {employee} from './Data'
import {staff} from './Data'
import DisplayMembers from './DisplayMembers.js'
import Modal from 'react-modal';


function Department() {
    const[empItems,setEmpItems]=useState()
    const[stfItems,setStfItems]=useState()
    // const[click,setClick]=useState(false)
    const[dept,setDept]=useState(null)
    const[isOpen,setOpen]=useState(false)
    const[deptId,setDeptId]=useState('')
    const[deptName,setDeptName]=useState('')
    console.log(department.length)
   
   const handleAddDepartment=(e)=>
   {
     setOpen(true)
     
   }
   
   const handleDeptName=(e)=>
   {
     setDeptName(e.target.value)
     console.log(deptName)
     
   }

   const handleAddingDepartment=()=>
   {
    setOpen(false)
     if(deptName!=='')
     {
     setDeptId(department.length)
     console.log(department.length)
     
     

      
        department.push({name:deptName,Deptid:department.length+1})
     }
     setDeptName("")

   }

    const handleDepartment=(e)=>
    {
    
        console.log(e)
      setEmpItems(employee.filter((emp)=>{return emp.DeptId===e})) 
      console.log(empItems)
      setStfItems(staff.filter((stf)=>{return stf.DeptId===e}))
      console.log(stfItems)
      // setClick(true)
      setDept(e)
    }
    return (
        <div class="main_div_department"> 
           <div class="div_btns">
           {department.map((dep)=><div><button class="btn_dep"value="1" onClick={()=>handleDepartment(dep.Deptid)}>{dep.name}</button></div> )}
       
           <div> <button  class="btn_dep" value="5"onClick={(e)=>handleAddDepartment(e)}>+</button></div>
           <Modal isOpen={isOpen} className="model_style">
           
             <input type="text" class="add_input" value={deptName} onChange={(e)=>handleDeptName(e)}placeholder="Enter new Department"/>
             <button class="add_btn"onClick={()=>handleAddingDepartment()}>Add</button>
           </Modal>
           
           </div> 
          {dept &&  <DisplayMembers handleDepartment={handleDepartment} value={dept} emps={empItems} stfs={stfItems}/>}
         
        </div>
       


    )
}

export default Department