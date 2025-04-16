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

{/* CRUD dashboard stagiaire */}
import EditStageInfo from "../pages/stagiaire/crud/EditStageInfo";
import ManageDocuments from "../pages/stagiaire/crud/ManageDocuments";
import ManageReports from "../pages/stagiaire/crud/ManageReports";
import ManageTasksStage from "../pages/stagiaire/crud/ManageTaskStage";

{/* Pages  encadreur */}
import SignUpPageEncadreur from "../pages/encadreur/pages/SignUpPageEncadreur";
import DashboardEncadreur from "../pages/encadreur/pages/DashboardEncadreur";
import AnalyseIa from "../pages/encadreur/pages/AnalyseIa";
import CalendrierEncadreur from "../pages/encadreur/pages/CalendrierEncadreur";
import GestionStagiaires from "../pages/encadreur/pages/GestionStagiaires";
import NotificationsEncadreur from "../pages/encadreur/pages/NotificationsEncadreur";
import ParametresEncadreur from "../pages/encadreur/pages/ParametresEncadreur";

{/* Pages admin */}
import SignUpPageAdmin from "../pages/admin/pages/SignUpAdmin";
import DashboardAdmin from "../pages/admin/pages/DashboardAdmin";
import ExportRapportsAdmin from "../pages/admin/pages/ExportRapportsAdmin";
import GestionSystemeAdmin from "../pages/admin/pages/GestionSystemeAdmin";
import GestionUtilisateursAdmin from "../pages/admin/pages/GestionUtilisateursAdmin";
import ParametresAdmin from "../pages/admin/pages/ParametresAdmin";

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

        {/* Pages stagiaires avec le layout StagiaireLayout */}
        <Route path="/signuppagestagiaire" element={<SignUpPageStagiaire />} />
        <Route element={<StagiaireLayout />}>
          <Route path="/dashboardstagiaire" element={<DashboardStagiaire />} />
          <Route path="/monstage" element={<MonStage />} />
          <Route path="/calendrierstagiaire" element={<CalendrierStagiaire />} />
          <Route path="/profilstagiaire" element={<ProfilStagiaire />} />
          <Route path="/parametresstagiaire" element={<ParametresStagiaire />} />
        </Route>

        {/* Pages CRUD pour Mon Stage */}
        <Route path="/editstageinfo" element={<EditStageInfo />} />
        <Route path="/managedocuments" element={<ManageDocuments />} />
        <Route path="/managereports" element={<ManageReports />} />
        <Route path="/managetaskstage" element={<ManageTasksStage />} />

        {/* Pages pour interface encadreur avec Sidebar*/}
        <Route path="/signuppageencadreur" element={<SignUpPageEncadreur />} />
        <Route element={<EncadreurLayout />}>
          <Route path="/dashboardencadreur" element={<DashboardEncadreur />} />
          <Route path="/analyseia" element={<AnalyseIa />} />
          <Route path="/calendrierencadreur" element={<CalendrierEncadreur />} />
          <Route path="/gestionstagiaires" element={<GestionStagiaires />} />
          <Route path="/notificationsencadreur" element={<NotificationsEncadreur />} />
          <Route path="/parametresencadreur" element={<ParametresEncadreur />} />
        </Route>

        {/* Pages pour interface admin avec Sidebar */}
        <Route path="/signuppageadmin" element={<SignUpPageAdmin />} />
        <Route element={<AdminLayout />}>
          <Route path="/dashboardadmin" element={<DashboardAdmin />} />
          <Route path="/exportrapportsadmin" element={<ExportRapportsAdmin />} />
          <Route path="/gestionsystemeadmin" element={<GestionSystemeAdmin />} />
          <Route path="/gestionutilisateursadmin" element={<GestionUtilisateursAdmin />} />
          <Route path="/parametresadmin" element={<ParametresAdmin />} />
        </Route>

      </Routes>
    </Router>
  );
}
