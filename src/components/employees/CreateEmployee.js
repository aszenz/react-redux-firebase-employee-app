import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from "react-router";
import { createEmployee } from '../../store/actions/employeeActions'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    bt_create: {
        margin: theme.spacing.unit,
        padding: '10'
    },
    input: {
        display: 'none',
    },
});

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
        this.props.history.push({
        pathname: '/',
        })
    }
    render() {
        return (
            <div>
                <br />
                <Typography variant="h6" color="inherit">
                    Create new employee
                </Typography>
                <form onSubmit={this.handleSubmit}>
                    <TextField
                        id="name"
                        label="Name"
                        defaultValue=""
                        margin="normal"
                        onChange={this.handleChange}
                    />
                    <br />
                    <TextField
                        id="email"
                        label="Email"
                        defaultValue=""
                        margin="normal"
                        onChange={this.handleChange}
                    />
                    <br />
                    <TextField
                        id="department"
                        label="Department"
                        defaultValue=""
                        margin="normal"
                        onChange={this.handleChange}
                    />
                    <br />
                    <TextField
                        id="salary"
                        label="Salary"
                        defaultValue=""
                        margin="normal"
                        onChange={this.handleChange}
                    />
                    <br />
                    <br />
                    <Button type="submit" variant="contained" color="primary" className="bt_create">Create</Button>
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
    withStyles(styles),
    withRouter,
    connect(null, mapDispatchToProps)
)(CreateEmployee)