import React, { useState } from 'react';

const EditProfilStagiaire = () => {
  const [formData, setFormData] = useState({
    nom: "Todisoa Stephano",
    email: "stephano.todisoa@esi.mg",
    telephone: "+261 34 12 345 67",
    etablissement: "ENI Fianarantsoa",
    filiere: "Informatique",
    niveau: "Master 2",
    encadrant: "M. Andriatsiferana"
  });

  const handleChange = (e) => setFormData({...formData, [e.target.name]: e.target.value});
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Modification sauvegardée !");
  };

  return (
    <div className="flex-1 p-8 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Modifier Profil</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow space-y-4">
        {Object.keys(formData).map((key) => (
          <div key={key}>
            <label className="block text-sm font-medium text-gray-700 capitalize">{key}</label>
            <input
              type="text"
              name={key}
              value={formData[key]}
              onChange={handleChange}
              className="w-full border border-gray-300 px-3 py-2 rounded"
            />
          </div>
        ))}
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Enregistrer</button>
      </form>
    </div>
  );
};

export default EditProfilStagiaire;
