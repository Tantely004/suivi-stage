import { useState } from 'react';

export default function ChangePasswordStagiaire() {
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: ''
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const validateForm = () => {
    const newErrors = {};

    if (!formData.currentPassword) newErrors.currentPassword = 'L\'ancien mot de passe est requis';
    if (!formData.newPassword || formData.newPassword.length < 6) newErrors.newPassword = 'Le nouveau mot de passe doit comporter au moins 6 caractères';
    if (!formData.confirmNewPassword) newErrors.confirmNewPassword = 'La confirmation est requise';
    else if (formData.confirmNewPassword !== formData.newPassword) newErrors.confirmNewPassword = 'Les mots de passe ne correspondent pas';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // 🔁 Ici tu pourras faire un fetch vers ton endpoint Django plus tard
      console.log('Modification envoyée :', formData);
      setSuccessMessage("Mot de passe modifié avec succès !");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="bg-gray-300 xl:pt-[0.1rem] xl:pb-[2.35rem]">
      <div className="flex items-center rounded-[3rem] xl:h-[75vh] xl:w-[60vw] xl:mt-[2.5rem] xl:ml-[13rem]">

        <div className="bg-white rounded-4xl xl:h-[65vh] xl:w-[60vw] xl:mx-[8rem] text-center">

          <div className="xl:mt-[3rem]" id="titre et sous-titre">
            <h2 className="poppins-title">Modifier mon mot de passe</h2>
            <p className="text-center poppins-light text-[1rem]">Veuillez remplir le formulaire ci-dessous</p>
          </div>

          <div className="xl:mt-[1rem] xl:py-[0.25rem] xl:h-[35vh]" id="champs de formulaire">
            <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">

              <div className="input-container xl:w-[80%] poppins-light">
                <input
                  type="password"
                  name="currentPassword"
                  placeholder="Ancien mot de passe"
                  className="form-control"
                  value={formData.currentPassword}
                  onChange={handleChange}
                />
                {errors.currentPassword && <span className="text-red-500 text-xs">{errors.currentPassword}</span>}
              </div>

              <div className="input-container xl:w-[80%] poppins-light">
                <input
                  type="password"
                  name="newPassword"
                  placeholder="Nouveau mot de passe"
                  className="form-control"
                  value={formData.newPassword}
                  onChange={handleChange}
                />
                {errors.newPassword && <span className="text-red-500 text-xs">{errors.newPassword}</span>}
              </div>

              <div className="input-container xl:w-[80%] poppins-light">
                <input
                  type="password"
                  name="confirmNewPassword"
                  placeholder="Confirmez le nouveau mot de passe"
                  className="form-control"
                  value={formData.confirmNewPassword}
                  onChange={handleChange}
                />
                {errors.confirmNewPassword && <span className="text-red-500 text-xs">{errors.confirmNewPassword}</span>}
              </div>

              {successMessage && <p className="text-green-600 text-sm">{successMessage}</p>}

              <button type="submit" className="bg-blue-500 text-white xl:w-[12vw] xl:py-[0.25rem] rounded poppins-light">
                Valider
              </button>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
