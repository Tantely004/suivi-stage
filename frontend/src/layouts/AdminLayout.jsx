import SidebarAdmin from '../components/admin/pages/SidebarAdmin';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

export default function AdminLayout() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Sidebar Admin */}  
      <div className={`fixed h-full transition-all duration-300 ${isExpanded ? 'w-64' : 'w-20'} bg-blue-800 border-r shadow`}>
        <SidebarAdmin isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
      </div>

      {/* Contenu Principal */}
      <div className={`flex-1 transition-all duration-300 ${isExpanded ? 'ml-64' : 'ml-20'} overflow-y-auto p-6 bg-gray-300`}>
        <Outlet />
      </div>
    </div>
  );
}
