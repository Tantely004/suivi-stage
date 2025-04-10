import { Link } from "react-router-dom";
import '../../static/css/common/LandingPage.css';

export default function LandingPage() {
    return (
      <>
        <section id="partie_about">
            <div className="bg-transparent xl:h-[35vh] xl:w-[55vw] xl:ml-[36.5rem] xl:mt-[7.5rem] xl:pt-[1rem]">
                <div className="xl:mt-[2.25rem]">
                    <p className="poppins-title text-center text-4xl text-white">Bienvenue sur Ge<span className="text-blue-500">Stage</span></p>
                    <p className="poppins-light text-[1.25rem]">Démarrez votre expérience de gestion de stages en toute simplicité et efficacité.</p>
                    <p className="poppins-light text-[1.25rem]">Notre outil vous aide à optimiser chaque étape, de la planification au suivi, en passant par l'évaluation.</p>
                    <p className="poppins-light text-[1.25rem]">Ensemble, faisons de chaque stage une réussite.</p>
                </div>
                <div className="text-center">
                    {/* Bouton de navigation */}
                    <Link to="/loginpage">
                        <button className="btn btn-primary poppins-light">Commencer l'expérience</button>
                    </Link>
                </div>
            </div>
        </section>
      </>
    );
  }
  