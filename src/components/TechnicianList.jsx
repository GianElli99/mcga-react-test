import React from 'react'
import Technician from './Technician'

const TechnicianList = () => {
    return (
        <div>
            <Technician nombre="Gian" apellido="Elli" telefono="4957778" especializaciones={['A','B']}/>
            <Technician nombre="Gian" apellido="Elli" telefono="4957778" especializaciones={['A','B']}/>
            <Technician nombre="Gian" apellido="Elli" telefono="4957778" especializaciones={['A','B']}/>
        </div>
    )
}

export default TechnicianList;
