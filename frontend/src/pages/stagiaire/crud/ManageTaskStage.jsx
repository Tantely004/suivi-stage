import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { FileUpload } from 'primereact/fileupload';
import { Tag } from 'primereact/tag';

const ManageTaskStage = () => {
  const [tasks, setTasks] = useState([
    { id: 1, label: 'Analyse des besoins', status: 'fait' },
    { id: 2, label: 'Intégration du backend', status: 'en_cours' },
    { id: 3, label: 'Déploiement final', status: 'non_commence' },
  ]);

  const handleMarkDone = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, status: 'fait' } : task
    ));
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleUploadChronogram = (e) => {
    const file = e.files[0];
    console.log('Chronogramme uploadé :', file.name);
    // Ici : requête vers backend IA pour extraire les tâches
  };

  const statusLabel = (status) => {
    switch (status) {
      case 'fait': return <Tag value="Fait" severity="success" />;
      case 'en_cours': return <Tag value="En cours" severity="warning" />;
      case 'non_commence': return <Tag value="Non commencé" severity="danger" />;
      default: return status;
    }
  };

  return (
    <div className="flex-1 p-8 bg-transparent xl:h-[80vh]">
      <p className="text-3xl poppins-title mb-6">Gestion des tâches de stage</p>

      <div className="bg-white p-6 rounded-lg shadow space-y-6 poppins-light">

        {/* Upload du chronogramme */}
        <div>
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Importer votre chronogramme</h2>
          <FileUpload
            name="chronogram"
            accept=".pdf,.docx,.xlsx"
            customUpload
            uploadHandler={handleUploadChronogram}
            chooseLabel="Choisir un fichier"
            uploadLabel="Analyser le fichier"
            cancelLabel="Annuler"
            emptyTemplate={<p className="mt-[0.5rem]">Glissez et déposez le fichier ici.</p>}
          />
        </div>

        {/* Liste des tâches générée */}
        <div>
          <h2 className="text-lg font-semibold text-gray-700 mb-3">Liste des tâches détectées</h2>
          <ul className="space-y-3">
            {tasks.map(task => (
              <li key={task.id} className="flex justify-between items-center bg-gray-50 px-4 py-2 rounded shadow-sm">
                <span>{task.label}</span>
                <div className="flex items-center gap-3">
                  {statusLabel(task.status)}
                  {task.status !== 'fait' && (
                    <Button
                      icon="pi pi-check"
                      className="p-button-rounded p-button-success p-button-sm"
                      onClick={() => handleMarkDone(task.id)}
                    />
                  )}
                  <Button
                    icon="pi pi-trash"
                    className="p-button-rounded p-button-danger p-button-sm"
                    onClick={() => handleDelete(task.id)}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default ManageTaskStage;
