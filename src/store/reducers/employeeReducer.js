// import { bindActionCreators } from "redux";

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
            console.log('create employee success')
            return state
        case 'CREATE_EMPLOYEE_ERROR':
            console.log('create employee error')
            return state
        case 'UPDATE_EMPLOYEE_SUCCESS':
            console.log('update employee success')
            return state
        case 'UPDATE_EMPLOYEE_ERROR':
            console.log('update employee error')
            return state
        case 'DELETE_EMPLOYEE_SUCCESS':
            console.log('delete employee success')
            return state
        case 'DELETE_EMPLOYEE_ERROR':
            console.log('delete employee error')
            return state
        default:
            return state
    }
}
export default employeeReducer