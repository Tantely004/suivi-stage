import { Calendar } from 'primereact/calendar';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { useState } from 'react';

const PlanificationEntretienCard = () => {
  const [date, setDate] = useState(null);

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-semibold text-gray-700 mb-3">📅 Planifier un Entretien</h2>
      <div className="flex flex-col gap-4">
        <Calendar placeholder="Choisissez une date" value={date} onChange={(e) => setDate(e.value)} showTime showIcon className="w-full" />
        <InputTextarea placeholder="Objet de l'entretien..." rows={3} className="w-full" />
        <Button label="Planifier" icon="pi pi-calendar-plus" className="p-button-sm p-button-primary self-end" />
      </div>
    </div>
  );
};

export default PlanificationEntretienCard;
