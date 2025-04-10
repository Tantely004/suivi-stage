import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Réinitialiser l'erreur avant une nouvelle tentative

    try {
      const response = await axios.post("http://localhost:8000/api/login/", {
        username,
        password,
      });

      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        navigate("/dashboard"); // Rediriger vers le tableau de bord après connexion
      }
    } catch (err) {
      setError("Identifiants incorrects. Veuillez réessayer.");
    }
  };

  return (
    <div className="container my-5 flex flex-col items-center">
        <div className="d-flex flex-wrap justify-content-center gap-4 bg-black">
            {/* Formulaire de connexion */}
            <div className="custom-form bg-gray-100 p-5 rounded-lg shadow-md">
                <h2 className="text-xl font-bold text-center">Connectez-vous</h2>

                <form onSubmit={handleLogin}>
                    <div className="input-container mb-3">
                    <label className="block font-medium" htmlFor="username">
                        Nom d'utilisateur :
                    </label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        className="form-control"
                    />
                    </div>

                    <div className="input-container mb-3">
                    <label className="block font-medium" htmlFor="password">
                        Mot de passe :
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="form-control"
                    />
                    </div>

                    {error && <p className="text-red-500 text-sm text-center">{error}</p>}

                    <button type="submit" className="btn btn-primary w-full">
                    Connexion
                    </button>
                    <a
                    className="btn btn-secondary w-full mt-3 text-center"
                    href="/inscription"
                    >
                    S'inscrire
                    </a>
                </form>    
            </div>

            {/* Carte avec Carousel */}
            <div className="card shadow-md p-3 rounded-lg w-96">
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/media/eChat/Screenshot_11.png" className="d-block w-100 rounded" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="/media/eChat/Screenshot_11.png" className="d-block w-100 rounded" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="/media/eChat/Screenshot_11.png" className="d-block w-100 rounded" alt="..." />
                    </div>
                </div>
            </div>
            <div className="card-body text-center">
                <h5 className="card-title">E - Chat</h5>
                <p className="text-gray-600">
                Merci de vous connecter et de rejoindre notre communauté !
                </p>
            </div>
        </div>
        </div>
    </div>
  );
};

export default LoginPage;
