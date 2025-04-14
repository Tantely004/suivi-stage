import { Link } from "react-router-dom";
import '../../static/css/common/LandingPage.css';

export default function LandingPage() {
    return (
    <div className="landing-page xl:w-[100vw] xl:h-[100vh]">
        <section id="partie_about">
            <div className="bg-transparent xl:h-[35vh] xl:w-[55vw] xl:ml-[36.5rem] xl:mb-[6rem]">
                <div className="xl:mt-[2.25rem] text-white">
                    <p className="poppins-title text-center text-4xl">Bienvenue sur Ge<span className="text-blue-400">Stage</span></p>
                    <p className="poppins-light text-[1.25rem] xl:ml-[0.7rem] xl:mt-[1rem]">Démarrez votre expérience de gestion de stages en toute simplicité et efficacité.</p>
                    <p className="poppins-light text-[1.25rem] xl:ml-[0.7rem] xl:mt-[1rem]">Notre outil vous aide à optimiser chaque étape, de la planification au suivi, en passant par l'évaluation.</p>
                    <p className="poppins-light text-[1.25rem] xl:ml-[0.7rem] xl:mt-[1rem]">Ensemble, faisons de chaque stage une réussite.</p>
                </div>
                <div className="text-center">
                    {/* Bouton de navigation */}
                    <Link to="/loginpage">
                        <button className="btn btn-primary poppins-light">Commencer l'expérience</button>
                    </Link>
                </div>
            </div>
        </section>
    </div>
    );
}
  