import { useState } from 'react';

export default function LostPassword() {
  const [formData, setFormData] = useState({
    email: '',
    nouveauMotdepasse: '',
    confirmMotdepasse: ''
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Adresse email invalide';
    }
    if (!formData.nouveauMotdepasse || formData.nouveauMotdepasse.length < 6) {
      newErrors.nouveauMotdepasse = 'Le mot de passe doit contenir au moins 6 caractères';
    }
    if (!formData.confirmMotdepasse) {
      newErrors.confirmMotdepasse = 'Veuillez confirmer le mot de passe';
    } else if (formData.confirmMotdepasse !== formData.nouveauMotdepasse) {
      newErrors.confirmMotdepasse = 'Les mots de passe ne correspondent pas';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Données soumises pour réinitialisation:', formData);
      setSuccessMessage("Votre mot de passe a été réinitialisé avec succès !");
      // Envoyer au backend via fetch/axios ici
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-3xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">Réinitialisation de mot de passe</h2>
        <p className="text-sm text-gray-600 text-center mb-6">
          Veuillez entrer votre adresse email et définir un nouveau mot de passe.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              className="w-full border border-gray-300 rounded-lg p-3"
              placeholder="Adresse email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div className="mb-4">
            <input
              type="password"
              name="nouveauMotdepasse"
              className="w-full border border-gray-300 rounded-lg p-3"
              placeholder="Nouveau mot de passe"
              value={formData.nouveauMotdepasse}
              onChange={handleChange}
              required
            />
            {errors.nouveauMotdepasse && <p className="text-red-500 text-sm">{errors.nouveauMotdepasse}</p>}
          </div>

          <div className="mb-4">
            <input
              type="password"
              name="confirmMotdepasse"
              className="w-full border border-gray-300 rounded-lg p-3"
              placeholder="Confirmez le mot de passe"
              value={formData.confirmMotdepasse}
              onChange={handleChange}
              required
            />
            {errors.confirmMotdepasse && <p className="text-red-500 text-sm">{errors.confirmMotdepasse}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Réinitialiser le mot de passe
          </button>

          {successMessage && (
            <p className="text-green-600 text-sm text-center mt-4">{successMessage}</p>
          )}
        </form>
      </div>
    </div>
  );
}
