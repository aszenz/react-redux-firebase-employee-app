import React, { Component } from 'react'
import { connect } from 'react-redux'
import EmployeesList from '../employees/EmployeesList'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { firestore, firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class Home extends Component {

  componentWillMount() {
    getFirestore().setListener({ collection: 'employees', orderBy: ['createdAt', 'desc'] })
  }
  componentWillUnmount() {
    getFirestore().unsetListener({ collection: 'employees', orderBy: ['createdAt', 'desc'] })
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