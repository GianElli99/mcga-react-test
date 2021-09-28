import React from 'react'

const Technician = ({nombre, apellido,telefono, especializaciones}) => {
    return (
        <div>
            <span>{nombre + ' ' + apellido}</span>
            <span>{telefono}</span>
            <span>{especializaciones.toString()}</span>
        </div>
    )
}

export default Technician;