import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { withRouter } from "react-router";
import { updateEmployee } from '../../store/actions/employeeActions'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography'

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
                    <br />
                    <Typography variant="h6" color="inherit">
                        Update employee
                    </Typography>
                    <form onSubmit={this.handleSubmit}>
                        <TextField
                            id="name"
                            label="Name"
                            value={this.employee.name}
                            margin="normal"
                            onChange={this.handleChange}
                        />
                        <br />
                        <TextField
                            id="email"
                            label="Email"
                            value={this.employee.email}
                            margin="normal"
                            onChange={this.handleChange}
                        />
                        <br />
                        <TextField
                            id="department"
                            label="Department"
                            value={this.employee.department}
                            margin="normal"
                            onChange={this.handleChange}
                        />
                        <br />
                        <TextField
                            id="salary"
                            label="Salary"
                            value={this.employee.salary}
                            margin="normal"
                            onChange={this.handleChange}
                        />
                        <br />
                        <br />
                        <Button type="submit" variant="contained" color="primary">Update</Button>
                    </form>
                </div >
            )
        }
        else {
            return (
                <Typography variant="h6" color="inherit">
                    Error
                </Typography>
            )
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