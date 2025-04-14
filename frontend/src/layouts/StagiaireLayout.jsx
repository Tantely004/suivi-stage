import Sidebar from '../components/Dashboard/stagiaire/Sidebar';
import { Outlet } from 'react-router-dom';

export default function StagiaireLayout() {
  return (
    <div className="flex h-screen">
      {/* Sidebar fixe à gauche */}
      <div className="w-64 bg-white border-r shadow h-full fixed">
        <Sidebar />
      </div>

      {/* Contenu principal à droite */}
      <div className="flex-1 ml-64 overflow-y-auto p-6">
        <Outlet />
      </div>
    </div>
  );
}
