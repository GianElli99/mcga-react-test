import React from 'react';
import { FcEmptyTrash as DeleteIcon } from 'react-icons/fc';

const technicianStyle = { display: 'flex', justifyContent: 'space-evenly' };

const Technician = ({
  id,
  name,
  surname,
  phone,
  specializations,
  onDelete,
}) => {
  return (
    <div style={technicianStyle}>
      <div>
        <span>Full name</span>
        <span>{name + ' ' + surname}</span>
      </div>
      <div>
        <span>Phone</span>
        <span>{phone}</span>
      </div>
      <div>
        <span>Specializations</span>
        <span>{specializations.toString()}</span>
      </div>
      <DeleteIcon
        style={{ cursor: 'pointer' }}
        onClick={() => onDelete(id)}
      ></DeleteIcon>
    </div>
  );
};

export default Technician;
