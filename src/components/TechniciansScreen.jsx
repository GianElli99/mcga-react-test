import React, { useState } from 'react';
import TechnicianForm from './TechnicianForm';
import TechnicianList from './TechnicianList';
import techniciansData from '../mocks/technicians.json';

const TechniciansScreen = () => {
  const [technicians, setTechnicias] = useState(techniciansData);

  const deleteTechnician = (id) => {
    setTechnicias(technicians.filter((technician) => technician._id !== id));
  };
  const addTechnician = (technician) => {
    setTechnicias([technician, ...technicians]);
  };

  return (
    <>
      <TechnicianForm onAdd={addTechnician} />
      <TechnicianList technicians={technicians} onDelete={deleteTechnician} />
    </>
  );
};

export default TechniciansScreen;
