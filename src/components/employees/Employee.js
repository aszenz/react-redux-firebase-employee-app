import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { deleteEmployee } from '../../store/actions/employeeActions'
import { Link } from 'react-router-dom'
import { withRouter } from "react-router";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class Employee extends Component {
    id = this.props.emp_details.id
    handleSubmit = e => {
        e.preventDefault()
        // console.log(this.state)
        // TODO delete data in db
        this.props.deleteEmployee(this.id)
        // this.props.history.push('/')
    }
    render() {
        const { emp_details } = this.props
        return (
            <div>
                <Card>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            {emp_details.name}
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>
                            {emp_details.id}
                        </Typography>
                        <Typography component="p">
                            Email: {emp_details.email}
                        </Typography>
                        <Typography component="p">
                            Department: {emp_details.department}
                        </Typography>
                        <Typography>
                            Salary: {emp_details.salary}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button type="submit" size="small" component={Link} to={'/employee/' + emp_details.id} color="inherit">
                            Edit
                        </Button>
                        <form onSubmit={this.handleSubmit}>
                            <Button type="submit" size="small" color="inherit">
                                Delete
                            </Button>
                        </form>
                    </CardActions>
                </Card>
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