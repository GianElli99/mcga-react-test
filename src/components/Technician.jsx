import React from 'react';
import { MdDeleteForever as DeleteIcon } from 'react-icons/md';
import { MdEdit as EditIcon } from 'react-icons/md';

const technicianStyle = { display: 'flex', justifyContent: 'space-evenly' };

const Technician = ({
  id,
  name,
  surname,
  phone,
  specializations,
  onDelete,
  onModify,
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
      <EditIcon
        style={{
          height: '2rem',
          width: '2rem',
          cursor: 'pointer',
        }}
        onClick={() => onModify(id)}
      />
      <DeleteIcon
        style={{
          height: '2rem',
          width: '2rem',
          cursor: 'pointer',
          color: '#FF0000',
        }}
        onClick={() => onDelete(id)}
      />
    </div>
  );
};

export default Technician;
