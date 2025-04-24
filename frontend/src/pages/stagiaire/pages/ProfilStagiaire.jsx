import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfilStagiaire = () => {
  const navigate = useNavigate();
  const [cvFile, setCvFile] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  const handleUpload = (e) => setCvFile(e.target.files[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!cvFile) return;

    const formData = new FormData();
    formData.append('cv', cvFile);

    fetch('http://localhost:8000/api/upload_cv/', {
      method: 'POST',
      body: formData,
    })
      .then((res) => {
        res.ok
          ? setSuccessMessage("CV envoyé avec succès !")
          : setSuccessMessage("Erreur lors de l'envoi du CV.");
      })
      .catch(() => setSuccessMessage("Erreur réseau."));
  };

  return (
    <div className="flex-1 p-8 bg-transparent min-h-screen">
      <p className="text-3xl poppins-title mb-6">Profil du stagiaire</p>

      {/* Section Photo de Profil */}
      <div className="bg-white p-6 rounded-lg shadow mb-6 flex items-center gap-6 poppins-light">
        <div className="h-20 w-20 rounded-full bg-gray-300 flex items-center justify-center text-gray-500">
          Photo
        </div>
        <button
          onClick={() => navigate("/uploadphotostagiaire")}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Modifier la photo
        </button>
      </div>

      {/* Informations personnelles */}
      <div className="bg-white p-6 rounded-lg shadow mb-6 flex justify-between items-center poppins-light">
        <div>
          <h2 className="text-md font-semibold text-gray-700 mb-2">Informations personnelles</h2>
          <p><strong>Nom :</strong> Todisoa Stephano</p>
          <p><strong>Email :</strong> stephano.todisoa@esi.mg</p>
          <p><strong>Téléphone :</strong> +261 34 12 345 67</p>
          <p><strong>Établissement :</strong> ENI Fianarantsoa</p>
        </div>
        <button
          onClick={() => navigate("/editprofilstagiaire")}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Modifier Infos
        </button>
      </div>

      {/* Parcours académique */}
      <div className="bg-white p-6 rounded-lg shadow mb-6 flex justify-between items-center poppins-light">
        <div>
          <h2 className="text-md font-semibold text-gray-700 mb-2">Parcours</h2>
          <p><strong>Filière :</strong> Informatique</p>
          <p><strong>Niveau :</strong> Master 2</p>
          <p><strong>Encadrant professionnel :</strong> M. Andriatsiferana</p>
        </div>
      </div>

      {/* Upload CV */}
      <div className="bg-white p-6 rounded-lg shadow poppins-light">
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
          <button
          onClick={() => navigate("/suggestionsia")}
          className="bg-blue-600 text-white px-4 py-2 mx-4 rounded hover:bg-blue-700"
          >
            Suggestions IA
          </button>
        </form>
        {successMessage && <p className="mt-2 text-sm text-green-600">{successMessage}</p>}
      </div>
    </div>
  );
};

export default ProfilStagiaire;
