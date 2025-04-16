import React, { useState } from 'react';
import { Card } from 'primereact/card';
import { FileUpload } from 'primereact/fileupload';
import { Message } from 'primereact/message';

const AnalyseIa = () => {
  const [uploaded, setUploaded] = useState(false);

  return (
    <div className="flex-1 p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Analyse IA & Recommandations</h1>

      <Card title="📂 Déposer un CV pour analyse" className="shadow-sm bg-white mb-6">
        <FileUpload 
          name="cv" 
          accept=".pdf,.docx" 
          maxFileSize={1000000} 
          customUpload 
          uploadHandler={() => setUploaded(true)}
          chooseLabel="Sélectionner CV"
          uploadLabel="Analyser"
          cancelLabel="Annuler"
        />
        {uploaded && <Message severity="success" text="Analyse IA effectuée avec succès !" className="mt-4" />}
      </Card>

      <Card title="💡 Suggestions IA" className="shadow-sm bg-white">
        <ul className="list-disc ml-6 text-gray-700 space-y-2 text-sm">
          <li>Thème suggéré : Optimisation d’architecture logicielle.</li>
          <li>Projet idéal : Application RH modulaire pour SIIGFP.</li>
          <li>Compétences ciblées : Django, API REST, React.</li>
        </ul>
      </Card>
    </div>
  );
};

export default AnalyseIa;
