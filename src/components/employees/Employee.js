import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { deleteEmployee } from '../../store/actions/employeeActions'
import { Link } from 'react-router-dom'
import { withRouter } from "react-router";
class Employee extends Component {
    id = this.props.emp_details.id
    handleSubmit = e => {
        e.preventDefault()
        // console.log(this.state)
        // TODO delete data in db
        this.props.deleteEmployee(this.id)
        this.props.history.push('/')
    }
    render() {
        const { emp_details } = this.props
        return (
            <div>
                <div className="emp-edit">
                    <Link to={'/employee/' + emp_details.id}>
                        Edit Employee
                    </Link>
                    <div className="emp-delete">
                        <form onSubmit={this.handleSubmit}>
                            <button>Delete</button>
                        </form>
                    </div>
                </div>
                <div className="emp-details">
                    <div className="emp-id">
                        {emp_details.id}
                    </div>
                    <div className="emp-name">
                        Name: {emp_details.name}
                    </div>
                    <div className="emp-email">
                        Email: {emp_details.email}
                    </div>
                    <div className="emp-deptt">
                        Department: {emp_details.department}
                    </div>
                    <div className="emp-salary">
                        Salary: {emp_details.salary}
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteEmployee: (empId) => dispatch(deleteEmployee(empId))
    }
}
export default compose(
    withRouter,
    connect(null, mapDispatchToProps),
    firestoreConnect([
        { collection: 'employees' }
    ]),
)(Employee)