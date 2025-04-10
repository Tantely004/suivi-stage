import { useState } from 'react';
import '../../static/css/common/CommonStyle.css';

export default function RedirectionPage() {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const validateEmail = () => {
    const newErrors = {};
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Veuillez entrer une adresse email valide';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail()) {
      // Simuler l'envoi de l'email de réinitialisation
      console.log('Envoi du lien de réinitialisation à:', email);
      setSuccessMessage('Un lien de réinitialisation vous a été envoyé par email.');
      setEmail('');
    }
  };

  return (
    <div className="login-page xl:w-[100vw]">
      <div className="flex items-center justify-center h-screen">
        <div className="bg-white p-8 rounded-3xl shadow-lg w-full max-w-lg">
          <h2 className="text-2xl font-bold text-center mb-4 poppins-title">Mot de passe oublié</h2>
          <p className="text-center mb-6 text-gray-600 poppins-light">
            Entrez votre adresse email pour recevoir un lien de réinitialisation.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="Votre email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-3 rounded-xl hover:bg-blue-600 transition-all"
            >
              Envoyer le lien
            </button>
          </form>

          {successMessage && (
            <p className="text-green-500 text-center mt-4">{successMessage}</p>
          )}
        </div>
      </div>
    </div>
  );
}
