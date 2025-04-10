import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/common/LandingPage";
import LoginPage from "../pages/common/LoginPage";
import LoginPageTemplate from "../pages/common/LoginPageTemplate";
import SignUpPage from "../pages/common/SignUpPage";
import RedirectionPage from "../pages/common/RedirectionPage";
import LostPasswordPage from "../pages/common/LostPasswordPage";

export default function AppRoutes() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/loginpage" element={<LoginPage />} />
          <Route path="/loginpagetemplate" element={<LoginPageTemplate />} />
          <Route path="/signuppage" element={<SignUpPage />} />
          <Route path="/redirectionpage" element={<RedirectionPage />} />
          <Route path="/lostpasswordpage" element={<LostPasswordPage />} />
        </Routes>
    </Router>
  );
}
