import React from 'react'
import Employee from './Employee'
const EmployeeList = ({ employees }) => {
    return (
        <div className="emp-list">
            {employees && employees.map(emp => {
                return (
                    <div>
                        <br />
                        <Employee emp_details={emp} key={emp.id} />
                        <br />
                    </div>
                )
            })}
        </div>
    )
}
export default EmployeeList