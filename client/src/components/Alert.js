import React from 'react'

function Alert(props) {
    return (
        props.alert && <div className={`alert alert-${props.alert.Type} alert-dismissible fade show`} role="alert">
            <strong>{props.alert.Type}: </strong>{props.alert.msg}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    )
}

export default Alert
