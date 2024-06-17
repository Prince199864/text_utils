import React from 'react'

function Alert(props) {
    const capitalize = (word) => {
        let lowcase = word.toLowerCase();
        return lowcase.charAt(0).toUpperCase().concat(lowcase.slice(1));
    }
    return (
        <div style={{ height: '50px' }}>
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show my-1" role="alert`}>
                <strong>{capitalize(props.alert.type)}</strong>: {props.alert.message}
            </div>}
        </div>
    )
}

export default Alert
