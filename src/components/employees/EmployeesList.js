import React from 'react'
import Employee from './Employee'
const EmployeeList = ({ employees }) => {
  return (
    <div className="emp-list">
      {employees && employees.map(emp => {
        return (
          <div key={emp.id}>
            <br />
            <Employee emp_details={emp} />
            <br />
          </div>
        )
      })}
    </div>
  )
}
export default EmployeeList