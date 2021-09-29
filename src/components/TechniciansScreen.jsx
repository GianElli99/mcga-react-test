import React, { useState } from 'react';
import TechnicianForm from './TechnicianForm';
import TechnicianList from './TechnicianList';
import techniciansData from '../mocks/technicians.json';

const TechniciansScreen = () => {
  const [technicians, setTechnicias] = useState(techniciansData);
  const [mode, setMode] = useState('Add');
  const [technicianToModify, setTechnicianToModify] = useState(undefined);

  const deleteTechnician = (id) => {
    setTechnicias(technicians.filter((technician) => technician._id !== id));
  };
  const addTechnician = (technician) => {
    setTechnicias([technician, ...technicians]);
  };
  const modifyTechnician = (id) => {
    setMode('Modify');
    setTechnicianToModify(technicians.find((x) => x._id === id));
  };
  const cancelSubmit = () => {
    setMode('Add');
    setTechnicianToModify(undefined);
  };
  const formSubmit = (technician) => {
    if (mode === 'Add') {
      addTechnician(technician);
      return;
    }
    if (mode === 'Modify') {
      setTechnicias([
        technician,
        ...technicians.filter((x) => x._id !== technician._id),
      ]);
      setMode('Add');
      return;
    }
  };

  return (
    <>
      <TechnicianForm
        onSubmit={formSubmit}
        onCancel={cancelSubmit}
        mode={mode}
        technicianToModify={technicianToModify}
      />
      <TechnicianList
        technicians={technicians}
        onDelete={deleteTechnician}
        onModify={modifyTechnician}
      />
    </>
  );
};

export default TechniciansScreen;
