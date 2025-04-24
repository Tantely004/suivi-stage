import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

const UploadCompteRenduStagiaire = () => {
  const { id } = useParams(); // ID de l'entretien ciblé
  const [titre, setTitre] = useState('');
  const [fichier, setFichier] = useState(null);
  const [message, setMessage] = useState('');

  const handleFileChange = (e) => {
    setFichier(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!titre || !fichier) {
      setMessage("Veuillez remplir tous les champs.");
      return;
    }

    const formData = new FormData();
    formData.append('entretien_id', id);
    formData.append('titre', titre);
    formData.append('fichier', fichier);

    try {
      const response = await fetch(`http://localhost:8000/api/compterendus/`, {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        setMessage("Compte-rendu ajouté avec succès !");
      } else {
        setMessage("Erreur lors de l'envoi du compte-rendu.");
      }
    } catch (error) {
      setMessage("Erreur de connexion au serveur.");
    }
  };

  return (
    <div className="flex-1 p-8 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Ajouter un Compte-Rendu</h1>

      <div className="bg-white p-6 rounded-lg shadow poppins-light space-y-4">
        <p className="text-sm text-gray-700">Entretien ID : <strong>{id}</strong></p>

        <div className="flex flex-col gap-2">
          <label htmlFor="titre" className="text-gray-700 text-sm">Titre du compte-rendu</label>
          <InputText
            id="titre"
            placeholder="Ex: Compte rendu du 15 Avril 2025"
            className="w-full"
            value={titre}
            onChange={(e) => setTitre(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="fichier" className="text-gray-700 text-sm">Sélectionner un fichier (.pdf ou .docx)</label>
          <input
            type="file"
            id="fichier"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <Button
          label="Envoyer"
          icon="pi pi-upload"
          className="p-button-sm p-button-primary"
          onClick={handleUpload}
        />

        {message && <p className="text-sm text-center text-green-600 mt-4">{message}</p>}
      </div>
    </div>
  );
};

export default UploadCompteRenduStagiaire;
