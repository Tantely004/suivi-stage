import React from 'react';
import { FileUpload } from 'primereact/fileupload';

const ManageDocuments = () => {
  return (
    <div className="flex-1 p-8 bg-transparent xl:h-[80vh]">
      <p className="text-3xl poppins-title mb-6">Gestion des documents liés</p>

      <div className="bg-white p-6 rounded-lg shadow space-y-4 poppins-light">
        <FileUpload name="document" url="#" customUpload auto chooseLabel="Sélectionner un fichier" className="w-full" />
        <h2 className="font-semibold text-gray-700 mt-6 mb-2">Documents existants</h2>
        <ul className="text-sm text-blue-600 underline space-y-1">
          <li><a href="#">Plan de travail.pdf</a></li>
          <li><a href="#">Document de cadrage.pdf</a></li>
        </ul>
      </div>
    </div>
  );
};

export default ManageDocuments;
