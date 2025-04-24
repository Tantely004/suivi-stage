import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dialog } from 'primereact/dialog';

const ParametresStagiaire = () => {
  const navigate = useNavigate();
  const [receiveReminders, setReceiveReminders] = useState(true);
  const [showConfirm, setShowConfirm] = useState(false);

  const handlePasswordChange = () => {
    navigate("/changepasswordstagiaire");  // Redirection vers page de modification
  };

  const handleAccountDeletion = () => {
    alert("Compte supprimé avec succès !");
    setShowConfirm(false);
  };

  return (
    <div className="flex-1 p-8 bg-transparent min-h-screen">
      <p className="text-3xl poppins-title mb-6">Paramètres du compte</p>

      {/* Sécurité */}
      <div className="bg-white p-6 rounded-lg shadow mb-6 poppins-light">
        <h2 className="text-md font-semibold text-gray-700 mb-2">Sécurité</h2>
        <button
          className="text-sm bg-blue-700 text-white xl:p-[0.3rem] rounded"
          onClick={handlePasswordChange}
        >
          Modifier le mot de passe
        </button>
      </div>

      {/* Préférences */}
      <div className="bg-white p-6 rounded-lg shadow mb-6 poppins-light">
        <h2 className="text-md font-semibold text-gray-700 mb-2">Préférences</h2>
        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={receiveReminders}
            onChange={() => setReceiveReminders(!receiveReminders)}
          />
          Recevoir des rappels par e-mail
        </label>
      </div>

      {/* Suppression */}
      <div className="bg-white p-6 rounded-lg shadow poppins-light">
        <h2 className="text-md font-semibold text-gray-700 mb-2">Supprimer le compte</h2>
        <button
          className="text-sm bg-red-700 text-white xl:p-[0.3rem] rounded"
          onClick={() => setShowConfirm(true)}
        >
          Supprimer mon compte
        </button>
      </div>

      {/* Popup de Confirmation */}
      <Dialog
        header={<p className="text-black font-bold pt-[1rem] pl-[0.5rem] text-xl poppins-title">Confirmation</p>}
        visible={showConfirm}
        style={{ width: '350px', paddingRight: '5px', paddingBottom: '2px', border: '1px solid #e5e7eb', borderRadius: '8px', backgroundColor: '#fff' }}
        modal
        onHide={() => setShowConfirm(false)}
        contentStyle={{ backgroundColor: '#ffffff', borderRadius: '0.5rem', color: '#000' }}
        footer={
          <div className="flex justify-end gap-2">
            <button
              onClick={() => setShowConfirm(false)}
              className="bg-blue-700 text-white p-[0.3rem] rounded"
            >
              Annuler
            </button>
            <button
              onClick={handleAccountDeletion}
              className="bg-red-700 text-white px-[0.3rem] rounded"
            >
              Supprimer
            </button>
          </div>
        }
      >
        <p className="text-black text-sm poppins-light pl-[0.5rem]">
          Êtes-vous sûr de vouloir supprimer votre compte ?<br />
          Cette action est <strong>irréversible</strong>.
        </p>
      </Dialog>
    </div>
  );
};

export default ParametresStagiaire;
