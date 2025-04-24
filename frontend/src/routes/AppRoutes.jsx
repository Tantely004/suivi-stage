import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

{/* Common pages */}
import LandingPage from "../pages/common/LandingPage";
import LoginPage from "../pages/common/LoginPage";
import LoginPageTemplate from "../pages/common/LoginPageTemplate";
import RedirectionPage from "../pages/common/RedirectionPage";
import LostPasswordPage from "../pages/common/LostPasswordPage";

{/* Layouts */}
import StagiaireLayout from "../layouts/StagiaireLayout";
import EncadreurLayout from "../layouts/EncadreurLayout";
import AdminLayout from "../layouts/AdminLayout";

{/* Pages stagiaires */}
import SignUpPageStagiaire from "../pages/stagiaire/pages/SignUpPageStagiaire";
import DashboardStagiaire from "../pages/stagiaire/pages/DashboardStagiaire";
import MonStage from "../pages/stagiaire/pages/MonStage";
import CalendrierStagiaire from "../pages/stagiaire/pages/CalendrierStagiaire";
import ProfilStagiaire from "../pages/stagiaire/pages/ProfilStagiaire";
import ParametresStagiaire from "../pages/stagiaire/pages/ParametresStagiaire";
import SuggestionsIa from "../pages/stagiaire/pages/SuggestionIa";

{/* CRUD dashboard stagiaire */}
import EditStageInfo from "../pages/stagiaire/crud/EditStageInfo";
import ManageDocuments from "../pages/stagiaire/crud/ManageDocuments";
import ManageTasksStage from "../pages/stagiaire/crud/ManageTaskStage";
{/* CRUD et upload photo PhotoStagiaire */}
import UploadPhotoStagiaire from "../pages/stagiaire/crud/UploadPhotoStagiaire";
import EditProfilStagiaire from "../pages/stagiaire/crud/EditProfilStagiaire";
{/* CRUD pour ParametresStagiaire */}
import ChangePasswordStagiaire from "../pages/stagiaire/crud/ChangePasswordStagiaire";
{/* CRUD pour CalendrierStagiaire */}
import UploadCompteRenduStagiaire from "../pages/stagiaire/crud/UploadCompteRenduStagiaire";


{/* Pages  encadreur */}
import SignUpPageEncadreur from "../pages/encadreur/pages/SignUpPageEncadreur";
import DashboardEncadreur from "../pages/encadreur/pages/DashboardEncadreur";
import AnalyseIa from "../pages/encadreur/pages/AnalyseIa";
import CalendrierEncadreur from "../pages/encadreur/pages/CalendrierEncadreur";
import GestionStagiaires from "../pages/encadreur/pages/GestionStagiaires";
import NotificationsEncadreur from "../pages/encadreur/pages/NotificationsEncadreur";
import ParametresEncadreur from "../pages/encadreur/pages/ParametresEncadreur";
{/* Page CRUD pour CalendrierEncadreur */}
import ManageEntretiensEncadreur from "../pages/encadreur/crud/ManageEntretiensEncadreur";
{/* Page CRUD pour ParametresEncadreur */}
import ChangePasswordEncadreur from "../pages/encadreur/crud/ChangePasswordEncadreur";
{/* Page CRUD pour GestionStagiaire */}
import SuiviRapportsStagiaires from "../pages/encadreur/crud/SuiviRapportsStagiaires";

{/* Pages admin */}
import SignUpPageAdmin from "../pages/admin/pages/SignUpAdmin";
import DashboardAdmin from "../pages/admin/pages/DashboardAdmin";
import GestionStagiairesAdmin from "../pages/admin/pages/GestionStagiairesAdmin";
import GestionEncadreursAdmin from "../pages/admin/pages/GestionEncadreursAdmin";
import GestionAdminsAdmin from "../pages/admin/pages/GestionAdminsAdmin";
import AdministrationGenerale from "../pages/admin/pages/AdministrationGenerale";
import ParametresAdmin from "../pages/admin/pages/ParametresAdmin";
{/* Page CRUD pour ParametresAdmin */}
import ChangePasswordAdmin from "../pages/admin/crud/ChangePasswordAdmin";


export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* Pages publiques */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/loginpagetemplate" element={<LoginPageTemplate />} />
        <Route path="/redirectionpage" element={<RedirectionPage />} />
        <Route path="/lostpasswordpage" element={<LostPasswordPage />} />

        {/* Pages pour interface stagiaire stagiaires avec le layout StagiaireLayout */}
        <Route path="/signuppagestagiaire" element={<SignUpPageStagiaire />} />
        <Route element={<StagiaireLayout />}>
          <Route path="/dashboardstagiaire" element={<DashboardStagiaire />} />
          <Route path="/monstage" element={<MonStage />} />
          <Route path="/calendrierstagiaire" element={<CalendrierStagiaire />} />
          <Route path="/profilstagiaire" element={<ProfilStagiaire />} />
          <Route path="/parametresstagiaire" element={<ParametresStagiaire />} />
          <Route path="/suggestionsia" element={<SuggestionsIa />} />
          
          {/* Pages CRUD pour Mon Stage */}
          <Route path="/editstageinfo" element={<EditStageInfo />} />
          <Route path="/managedocuments" element={<ManageDocuments />} />
          <Route path="/managetaskstage" element={<ManageTasksStage />} />

          {/* Page CRUD pour ProfilStagiaire */}
          <Route path="/uploadphotostagiaire" element={<UploadPhotoStagiaire />} />
          <Route path="/editprofilstagiaire" element={<EditProfilStagiaire />} />

          {/* Page CRUD pour ParametresStagiaire */}
          <Route path="/changepasswordstagiaire" element={<ChangePasswordStagiaire />} />

          {/* Page CRUD pour CalendrierStagiaire */}
          <Route path="/uploadcompterendustagiaire/:id" element={<UploadCompteRenduStagiaire />} />

        </Route>

        
        

        {/* Pages pour interface encadreur avec Sidebar*/}
        <Route path="/signuppageencadreur" element={<SignUpPageEncadreur />} />
        <Route element={<EncadreurLayout />}>
          <Route path="/dashboardencadreur" element={<DashboardEncadreur />} />
          <Route path="/analyseia" element={<AnalyseIa />} />
          <Route path="/calendrierencadreur" element={<CalendrierEncadreur />} />
          <Route path="/gestionstagiaires" element={<GestionStagiaires />} />
          <Route path="/notificationsencadreur" element={<NotificationsEncadreur />} />
          <Route path="/parametresencadreur" element={<ParametresEncadreur />} />

          {/* Page CRUD pour CalendrierEncadreur */}
          <Route path="/manageentretiensencadreur" element={<ManageEntretiensEncadreur />} />

          {/* Page CRUD pour ParametresEncadreur */}
          <Route path="/changepasswordencadreur" element={<ChangePasswordEncadreur />} />

          {/* Page CRUD pour GestionStagiaire */}
          <Route path="/suivirapportsstagiaires/:id" element={<SuiviRapportsStagiaires />} />
        </Route>


        {/* Pages pour interface admin avec Sidebar */}
        <Route path="/signuppageadmin" element={<SignUpPageAdmin />} />
        <Route element={<AdminLayout />}>
          <Route path="/dashboardadmin" element={<DashboardAdmin />} />
          <Route path="/gestionstagiairesadmin" element={<GestionStagiairesAdmin />} />
          <Route path="/gestionencadreursadmin" element={<GestionEncadreursAdmin />} />
          <Route path="/gestionadminsadmin" element={<GestionAdminsAdmin />} />
          <Route path="/administrationgenerale" element={<AdministrationGenerale />} />
          <Route path="/parametresadmin" element={<ParametresAdmin />} />

          {/* Page CRUD pour ParametresAdmin */}
          <Route path="/changepasswordadmin" element={<ChangePasswordAdmin />} />

        </Route>

      </Routes>
    </Router>
  );
}
