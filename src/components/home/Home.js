import React, { Component } from 'react'
import { connect } from 'react-redux'
import EmployeesList from '../employees/EmployeesList'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
class Home extends Component {
    update() {

    }
    render() {
        const { employees } = this.props
        return (
            <div>
                <EmployeesList employees={employees} />
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    // console.log(state)
    return ({
        employees: state.firestore.ordered.employees
    })
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'employees', orderBy: ['createdAt', 'desc'] }
    ])
)(Home)