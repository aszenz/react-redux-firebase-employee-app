// import { bindActionCreators } from "redux";
import { createEmployee, updateEmployee, deleteEmployee } from '../actions/employeeActions'
const initState = {
    // employees: [
    //     { id: '1', Name: 'ab', Email: 'ab@g.com', Department: 'g', Salary: 12 },
    //     { id: '2', Name: 'abas', Email: 'abc@gw.com', Department: 'eg', Salary: 42 },
    //     { id: '3', Name: 'cab', Email: 'tab@ag.com', Department: 'ssg', Salary: 45 }
    // ]
}

const employeeReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_EMPLOYEE_SUCCESS':
            console.log('create employee success\n state=', state)
            return state
        // return [...state, action.employee]
        case 'CREATE_EMPLOYEE_ERROR':
            console.log('create employee error\n state=', state)
            return state
        case 'UPDATE_EMPLOYEE_SUCCESS':
            console.log('update employee success\n state=', state)
            return state
        case 'UPDATE_EMPLOYEE_ERROR':
            console.log('update employee error\n state=', state)
            return state
        case 'DELETE_EMPLOYEE_SUCCESS':
            console.log('delete employee success\n state=', state)
            return state
        case 'DELETE_EMPLOYEE_ERROR':
            console.log('delete employee error\n state=', state)
            return state
        default:
            return state
    }
}
export default employeeReducer