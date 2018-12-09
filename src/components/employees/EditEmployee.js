import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { withRouter } from "react-router";
import { updateEmployee } from '../../store/actions/employeeActions'
class EditEmployee extends Component {
    employee = this.props.employee
    handleChange = e => {
        this.employee[e.target.id] = e.target.value
        this.setState({
            ...this.employee
        })
    }
    handleSubmit = e => {
        e.preventDefault()
        console.log('current state on submit ', this.state)
        // TODO store state data in db
        this.props.updateEmployee(this.employee)
        this.props.history.push('/')
    }
    render() {
        // console.log(this.props)
        if (this.employee) {
            return (
                <div>
                    <h5>Update employee</h5>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" value={this.employee.name} onChange={this.handleChange}></input>
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" value={this.employee.email} onChange={this.handleChange}></input>
                        </div>
                        <div>
                            <label htmlFor="department">Department</label>
                            <input type="text" id="department" value={this.employee.department} onChange={this.handleChange}></input>
                        </div>
                        <div>
                            <label htmlFor="salary">Salary</label>
                            <input type="number" id="salary" value={this.employee.salary} onChange={this.handleChange} ></input>
                        </div>
                        <div>
                            <button>Update</button>
                        </div>
                    </form>
                </div>
            )
        }
        else {
            return <div> Error </div>
        }
    }
}
const mapStateToProps = (state, ownProps) => {
    const empId = ownProps.match.params.id
    const allEmployees = state.firestore.data.employees
    // console.log(allEmployees)
    let empWithThisId = allEmployees ? allEmployees[empId] : null
    empWithThisId.id = empId
    console.log('empWithThisId', empWithThisId)
    return {
        employee: empWithThisId
    }
}
const mapDispatchToProps = dispatch => {
    return {
        updateEmployee: (employee) => dispatch(updateEmployee(employee))
    }
}
export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        { collection: 'employees' }
    ]),
)(EditEmployee)