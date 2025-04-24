import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UploadPhotoStagiaire = () => {
  const [photo, setPhoto] = useState(null);
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleUpload = (e) => setPhoto(e.target.files[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!photo) return;

    const formData = new FormData();
    formData.append('photo', photo);

    fetch('http://localhost:8000/api/upload_photo/', {
      method: 'POST',
      body: formData,
    })
    .then((res) => {
      if (res.ok) {
        setSuccess('Photo mise à jour avec succès !');
        setTimeout(() => navigate("/profilstagiaire"), 1500);
      } else {
        setSuccess('Erreur lors de l’envoi.');
      }
    })
    .catch(() => setSuccess('Erreur réseau.'));
  };

  return (
    <div className="flex-1 p-8 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Changer la photo de profil</h1>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow">
        <input type="file" accept="image/*" onChange={handleUpload} className="border p-2 rounded w-full" />
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          Confirmer la photo
        </button>
      </form>
      {success && <p className="mt-4 text-green-600 text-sm">{success}</p>}
    </div>
  );
};

export default UploadPhotoStagiaire;
