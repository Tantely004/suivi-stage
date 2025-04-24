import React, { useState } from 'react';
import { Card } from 'primereact/card';
import { Calendar } from 'primereact/calendar';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';

const ManageEntretiensEncadreur = () => {
  const [date, setDate] = useState(null);
  const [note, setNote] = useState('');
  const [entretiens, setEntretiens] = useState([]);

  const handleAdd = () => {
    if (date && note) {
      setEntretiens([...entretiens, { date, note }]);
      setDate(null);
      setNote('');
    }
  };

  return (
    <div className="flex-1 p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Planification des Entretiens</h1>

      <Card className="shadow-sm bg-white p-6 space-y-4">
        <div className="flex flex-col gap-3">
          <label className="font-semibold text-gray-700">Date et heure</label>
          <Calendar
            value={date}
            onChange={(e) => setDate(e.value)}
            showTime
            showIcon
            className="w-full"
          />
        </div>

        <div className="flex flex-col gap-3">
          <label className="font-semibold text-gray-700">Note / Sujet</label>
          <InputTextarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            rows={3}
            autoResize
            placeholder="Sujet de l'entretien"
          />
        </div>

        <Button label="Ajouter l'entretien" icon="pi pi-plus" className="p-button-success" onClick={handleAdd} />
      </Card>

      <Card className="shadow-sm bg-white p-6 mt-8">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Entretiens programmés</h2>
        <ul className="space-y-3 text-gray-700 text-sm">
          {entretiens.length > 0 ? entretiens.map((entretien, index) => (
            <li key={index}>
              📅 {entretien.date?.toLocaleString()} — {entretien.note}
            </li>
          )) : <p className="text-gray-500">Aucun entretien planifié.</p>}
        </ul>
      </Card>
    </div>
  );
};

export default ManageEntretiensEncadreur;
