import React from 'react'

const EditEmployee = (props) => {
    const empId = props.match.params.id
    return (
        <div>
            Emp Id: {empId}
            <br />
            TODO: Form to edit employees details
        </div>
    )
}
export default EditEmployee