import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from "react-router";
import { createEmployee } from '../../store/actions/employeeActions'
class CreateEmployee extends Component {
    state = {
        name: '',
        email: '',
        department: '',
        salary: ''
    }
    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = e => {
        e.preventDefault()
        // console.log(this.state)
        // TODO store state data in db
        this.props.createEmployee(this.state)
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
                <h5>Create new employee</h5>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" onChange={this.handleChange}></input>
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange}></input>
                    </div>
                    <div>
                        <label htmlFor="department">Department</label>
                        <input type="text" id="department" onChange={this.handleChange}></input>
                    </div>
                    <div>
                        <label htmlFor="salary">Salary</label>
                        <input type="number" id="salary" onChange={this.handleChange}></input>
                    </div>
                    <div>
                        <button>Create</button>
                    </div>
                </form>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        createEmployee: (employee) => dispatch(createEmployee(employee))
    }
}
export default compose(
    withRouter,
    connect(null, mapDispatchToProps)
)(CreateEmployee)