const initState = {
}

// TODO: show errors to users and use actions for updating state
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