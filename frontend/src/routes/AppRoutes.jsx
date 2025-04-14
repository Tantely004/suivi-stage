import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "../pages/common/LandingPage";
import LoginPage from "../pages/common/LoginPage";
import LoginPageTemplate from "../pages/common/LoginPageTemplate";
import SignUpPage from "../pages/common/SignUpPage";
import RedirectionPage from "../pages/common/RedirectionPage";
import LostPasswordPage from "../pages/common/LostPasswordPage";

import StagiaireLayout from "../layouts/StagiaireLayout";

import DashboardStagiaire from "../pages/stagiaire/DashboardStagiaire";
import MonStage from "../pages/stagiaire/MonStage";
import CalendrierStagiaire from "../pages/stagiaire/CalendrierStagiaire";
import ProfilStagiaire from "../pages/stagiaire/ProfilStagiaire";
import ParametresStagiaire from "../pages/stagiaire/ParametresStagiaire";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* Pages publiques */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/loginpagetemplate" element={<LoginPageTemplate />} />
        <Route path="/signuppage" element={<SignUpPage />} />
        <Route path="/redirectionpage" element={<RedirectionPage />} />
        <Route path="/lostpasswordpage" element={<LostPasswordPage />} />

        {/* Pages stagiaires avec le layout StagiaireLayout */}
        <Route element={<StagiaireLayout />}>
          <Route path="/dashboardstagiaire" element={<DashboardStagiaire />} />
          <Route path="/monstage" element={<MonStage />} />
          <Route path="/calendrierstagiaire" element={<CalendrierStagiaire />} />
          <Route path="/profilstagiaire" element={<ProfilStagiaire />} />
          <Route path="/parametresstagiaire" element={<ParametresStagiaire />} />
        </Route>
      </Routes>
    </Router>
  );
}
