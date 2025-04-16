import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

const GestionSystemeAdmin = () => {
  return (
    <div className="flex-1 p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Gestion du Système</h1>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <Card title="👥 Utilisateurs" className="shadow-sm bg-white">
          <p className="text-gray-700 text-sm mb-4">
            Ajoutez, modifiez ou supprimez des comptes utilisateurs (Stagiaires / Encadreurs).
          </p>
          <Button label="Gérer les utilisateurs" icon="pi pi-users" className="p-button-sm p-button-primary" />
        </Card>

        <Card title="🖥️ Postes & Technologies" className="shadow-sm bg-white">
          <p className="text-gray-700 text-sm mb-4">
            Gérez la liste des technologies proposées aux stagiaires et encadreurs.
          </p>
          <Button label="Configurer les postes" icon="pi pi-cog" className="p-button-sm p-button-secondary" />
        </Card>

        <Card title="🔐 Sécurité" className="shadow-sm bg-white xl:col-span-2">
          <p className="text-gray-700 text-sm mb-4">
            Configurez les paramètres de sécurité : mots de passe, accès, rôles.
          </p>
          <Button label="Paramétrer la sécurité" icon="pi pi-lock" className="p-button-sm p-button-warning" />
        </Card>
      </div>
    </div>
  );
};

export default GestionSystemeAdmin;
