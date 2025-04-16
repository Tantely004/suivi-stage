import { useState } from 'react';
import '../../../static/css/common/SignUpPage.css';

export default function SignUpPageEncadreur() {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    contact: '',
    direction: '', //Changement
    service: '', //Changement
    poste: '', //Changement
    motdepasse: '', // Ajout du mot de passe
    confirmMotdepasse: '' // Champ de confirmation ajouté
  });
  const [errors, setErrors] = useState({});

  // Fonction pour valider les champs
  const validateForm = () => {
    const newErrors = {};
    if (!formData.nom) newErrors.nom = 'Le nom est requis';
    if (!formData.prenom) newErrors.prenom = 'Le prénom est requis';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'L\'email est invalide';
    if (!formData.contact) newErrors.contact = 'Le numéro de contact est requis';
    if (!formData.etablissement) newErrors.etablissement = 'L\'établissement est requis';
    if (!formData.filiere) newErrors.filiere = 'La filière est requise';
    if (!formData.niveau) newErrors.niveau = 'Le niveau d\'études est requis';
    if (!formData.motdepasse || formData.motdepasse.length < 6)
      newErrors.motdepasse = 'Le mot de passe doit comporter au moins 6 caractères';
    if (!formData.confirmMotdepasse)
      newErrors.confirmMotdepasse = 'La confirmation du mot de passe est requise';
    else if (formData.confirmMotdepasse !== formData.motdepasse)
      newErrors.confirmMotdepasse = 'Les mots de passe ne correspondent pas';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Si aucune erreur, le formulaire est valide
  };

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const encryptedContact = encryptContact(formData.contact);
      const finalData = {
        ...formData,
        contact: encryptedContact
      };
      console.log(finalData);
      // Ici, tu pourrais envoyer `finalData` à ton backend via fetch ou axios
    }
  };

  // Fonction de chiffrement du contact
  const encryptContact = (contact) => {
    // Implémente ici une méthode de chiffrement (ex : AES)
    // Pour l'exemple, on retourne simplement la valeur en majuscules (à remplacer par du vrai chiffrement)
    return contact.toUpperCase(); // C'est juste un placeholder, remplace-le par un vrai chiffrement
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className="signup-page xl:w-[100vw] xl:pt-[0.1rem] xl:pb-[2.35rem]">
      <div className="flex items-center bg-transparent rounded-[3rem] xl:h-[85vh] xl:w-[75vw] xl:mt-[3rem] xl:ml-40">
      
        {/* Formulaire d'inscription */}
        <div className="bg-white rounded-4xl xl:h-[90vh] xl:w-[65vw] xl:mx-[4.5rem] text-center">
          <div id="logo">
            <p className="poppins-title xl:text-[1rem] text-black xl:w-[8vw] xl:pt-[0.5rem] xl:ml-[46rem]">Ge<span className="text-blue-500">Stage</span></p>
          </div>

          <div className="xl:mt-[0.85rem] xl:px-[0.5rem]" id='titre et sous-titre'>
            <h2 className="poppins-title">Inscription</h2>
            <p className="text-center poppins-light text-[1rem]">Veuillez remplir les informations suivantes pour créer un compte</p>
          </div>
          
          <div className="xl:mt-[0.85rem] xl:py-[0.25rem] xl:h-[60vh]" id='champs de formulaire'>

            <form onSubmit={handleSubmit}>
              <div className="flex">

                <div className="xl:mx-[2.5rem] xl:w-[27vw] xl:pt-[0.25rem]" id='Première partie du formulaire'>
                  
                  <div className="input-container xl:mb-3 xl:w-[95%] xl:ml-[0.8rem] poppins-light">
                    <input 
                      type="text" 
                      id="nom" 
                      name="nom" 
                      required
                      className="form-control"
                      placeholder="Votre nom"
                      value={formData.nom}
                      onChange={handleChange}
                    />
                    {errors.nom && <span className="text-red-500 text-xs">{errors.nom}</span>}
                  </div>

                  <div className="input-container xl:mb-3 xl:w-[95%] xl:ml-[0.8rem] xl:mt-[2.5rem] poppins-light">
                    <input 
                      type="text" 
                      id="prenom" 
                      name="prenom" 
                      required
                      className="form-control"
                      placeholder="Votre prénom"
                      value={formData.prenom}
                      onChange={handleChange}
                    />
                    {errors.prenom && <span className="text-red-500 text-xs">{errors.prenom}</span>}
                  </div>

                  <div className="input-container xl:mb-3 xl:w-[95%] xl:ml-[0.8rem] xl:mt-[2.5rem] poppins-light">
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required
                      className="form-control"
                      placeholder="Votre email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
                  </div>

                  <div className="input-container xl:mb-3 xl:w-[95%] xl:ml-[0.8rem] xl:mt-[2.5rem] poppins-light">
                    <input
                      type="password"
                      id="motdepasse"
                      name="motdepasse"
                      required
                      className="form-control"
                      value={formData.motdepasse}
                      onChange={handleChange}
                      placeholder="Mot de passe"
                    />
                    {errors.motdepasse && <p className="text-red-500 text-sm">{errors.motdepasse}</p>}
                  </div>

                  <div className="input-container xl:mb-3 xl:w-[95%] xl:ml-[0.8rem] xl:mt-[2.5rem] poppins-light">
                    <input
                      type="password"
                      id="confirmmotdepasse"
                      name="confirmmotdepasse"
                      required
                      className="form-control"
                      value={formData.confirmMotdepasse}
                      onChange={handleChange}
                      placeholder="Confirmez votre mot de passe"
                    />
                    {errors.motdepasse && <p className="text-red-500 text-sm">{errors.motdepasse}</p>}
                  </div>

                </div>

                <div className="xl:px-[0.5rem] xl:w-[27vw] xl:pt-[0.25rem]" id='Deuxième partie du formulaire'>
                  <div className="input-container xl:mb-3 xl:w-[95%] xl:ml-[0.8rem] poppins-light">
                    <input 
                      type="text" 
                      id="direction" 
                      name="direction" 
                      required
                      className="form-control"
                      placeholder="Votre direction"
                      value={formData.direction}
                      onChange={handleChange}
                    />
                    {errors.etablissement && <span className="text-red-500 text-xs">{errors.direction}</span>}
                  </div>

                  <div className="input-container xl:mb-3 xl:w-[95%] xl:ml-[0.8rem] xl:mt-[2.5rem] poppins-light">
                    <input 
                      type="text" 
                      id="service" 
                      name="service" 
                      required
                      className="form-control"
                      placeholder="Votre service"
                      value={formData.contact}
                      onChange={handleChange}
                    />
                    {errors.contact && <span className="text-red-500 text-xs">{errors.service}</span>}
                  </div>

                  <div className="input-container xl:mb-3 xl:w-[95%] xl:ml-[0.8rem] xl:mt-[2.5rem] poppins-light">
                    <input 
                      type="text" 
                      id="poste" 
                      name="poste" 
                      required
                      className="form-control"
                      placeholder="Votre poste"
                      value={formData.filiere}
                      onChange={handleChange}
                    />
                    {errors.filiere && <span className="text-red-500 text-xs">{errors.poste}</span>}
                  </div>

                  <div className="items-center xl:mt-[2.5rem] text-[1.2rem] poppins-light">
                    <button type="submit" className="bg-blue-500 text-white xl:w-[10vw] xl:py-[0.25rem] rounded">S'inscrire</button>
                  </div>
                </div>

              </div>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
