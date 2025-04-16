import { Link } from "react-router-dom";
import '../../static/css/common/LandingPage.css';

export default function LandingPage() {
    return (
    <div className="landing-page xl:w-[100vw] xl:h-[100vh]">
        <section id="partie_about">
            <div className="bg-transparent xl:h-[35vh] xl:w-[52vw] xl:ml-[37rem] xl:mb-[6rem]">
                <div className="xl:mt-[1.6rem]">
                    <p className="poppins-title text-center text-4xl text-gray-200">Bienvenue sur <span className="text-white">Ge</span><span className="text-blue-500">Stage</span></p>
                    <p className="poppins-light text-[1.25rem] xl:ml-[0.7rem] xl:mt-[1rem] text-white">Démarrez votre expérience de gestion de stages en toute simplicité et efficacité.</p>
                    <p className="poppins-light text-[1.25rem] xl:ml-[0.7rem] xl:mt-[1rem] text-white">Notre outil vous aide à optimiser chaque étape, de la planification au suivi, en passant par l'évaluation.</p>
                    <p className="poppins-light text-[1.25rem] xl:ml-[0.7rem] xl:mt-[1rem] text-white">Ensemble, faisons de chaque stage une réussite.</p>
                </div>
                <div className="text-center xl:mt-[2rem]">
                    {/* Bouton de navigation */}
                    <Link to="/loginpage">
                        <button className="bg-blue-600 text-white xl:w-[20vw] xl:py-[0.5rem] rounded poppins-light">Commencer l'expérience</button>
                    </Link>
                </div>
            </div>
        </section>
    </div>
    );
}
  