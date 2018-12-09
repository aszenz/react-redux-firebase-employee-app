export const createEmployee = employee => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore()
        // TODO add employee here
        firestore.collection('employees').add({
            ...employee,
            createdAt: new Date(),
            updatedAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_EMPLOYEE_SUCCESS' })
        }).catch((err) => {
            dispatch({ type: 'CREATE_EMPLOYEE_ERROR', err })
        })
    }
}

export const deleteEmployee = empId => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore()
        // TODO delete employee here
        firestore.collection('employees').doc(empId).delete().then(() => {
            dispatch({ type: 'DELETE_EMPLOYEE_SUCCESS' })
        }).catch((err) => {
            dispatch({ type: 'DELETE_EMPLOYEE_ERROR', err })
        })
    }
}

export const updateEmployee = employee => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore()
        // TODO update employee here
        firestore.collection('employees').doc(employee.id).update({
            ...employee,
            updatedAt: new Date()
        }).then(() => {
            dispatch({ type: 'UPDATE_EMPLOYEE_SUCCESS' })
        }).catch((err) => {
            dispatch({ type: 'UPDATE_EMPLOYEE_ERROR', err })
        })
    }
}