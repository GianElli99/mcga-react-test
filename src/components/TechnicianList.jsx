import React from 'react';
import Technician from './Technician';

const TechnicianList = ({ technicians, onDelete, onModify }) => {
  return (
    <>
      {technicians.map((technician, i) => (
        <Technician
          key={i}
          id={technician._id}
          name={technician.nombre}
          surname={technician.apellido}
          phone={technician.telefono}
          specializations={technician.especializaciones}
          onDelete={onDelete}
          onModify={onModify}
        />
      ))}
    </>
  );
};

export default TechnicianList;
