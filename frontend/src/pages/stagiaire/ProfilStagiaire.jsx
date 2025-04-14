import React, { useState } from 'react';

const ProfilStagiaire = () => {
  const [cvFile, setCvFile] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  const handleUpload = (e) => {
    const file = e.target.files[0];
    setCvFile(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!cvFile) return;

    const formData = new FormData();
    formData.append('cv', cvFile);

    // 🔁 Remplace cette URL par celle de ton endpoint Django pour upload CV
    fetch('http://localhost:8000/api/upload_cv/', {
      method: 'POST',
      body: formData,
    })
      .then((res) => {
        if (res.ok) {
          setSuccessMessage("CV envoyé avec succès !");
        } else {
          setSuccessMessage("Erreur lors de l'envoi du CV.");
        }
      })
      .catch(() => setSuccessMessage("Erreur réseau."));
  };

  return (
    <div className="flex-1 p-8 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Profil du stagiaire</h1>

      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-md font-semibold text-gray-700 mb-2">Informations personnelles</h2>
        <p><strong>Nom :</strong> Todisoa Stephano</p>
        <p><strong>Email :</strong> stephano.todisoa@esi.mg</p>
        <p><strong>Téléphone :</strong> +261 34 12 345 67</p>
        <p><strong>Établissement :</strong> ENI Fianarantsoa</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-md font-semibold text-gray-700 mb-2">Parcours</h2>
        <p><strong>Filière :</strong> Informatique</p>
        <p><strong>Niveau :</strong> Master 2</p>
        <p><strong>Encadrant pédagogique :</strong> M. Andriatsiferana</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-md font-semibold text-gray-700 mb-4">Upload de votre CV</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="file"
            accept=".pdf"
            onChange={handleUpload}
            className="border border-gray-300 rounded px-4 py-2"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Envoyer
          </button>
        </form>
        {successMessage && <p className="mt-2 text-sm text-green-600">{successMessage}</p>}
      </div>
    </div>
  );
};

export default ProfilStagiaire;
