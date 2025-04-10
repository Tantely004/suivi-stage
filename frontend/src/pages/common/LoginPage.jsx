import { Link } from 'react-router-dom';
import ImageLogin from '../../assets/images/ImageLogin.jpg';
import '../../static/css/common/CommonStyle.css';

export default function LoginPage () {
  return (
    <div className="flex items-center bg-green-400 rounded-[3rem] xl:h-[85vh] xl:w-[75vw] xl:mt-[3rem] xl:ml-40">

      {/* Formulaire de connexion */}
      <div className=" bg-white rounded-bl-[3rem] rounded-l-[3rem] xl:h-[85vh] xl:w-[35vw] text-center">
        <div id="logo">
          <p className="poppins-title xl:text-[1rem] text-black xl:w-[8vw] xl:pt-[0.2rem] xl:ml-[22.5rem]">Ge<span className="text-blue-500">Stage</span></p>
        </div>

        <div className="xl:mt-[2rem] xl:px-[0.5rem]">
          <h2 className="poppins-title">Bonjour à vous</h2>
          <p className="text-center poppins-light text-[0.85rem]">Pour vous connecter à votre compte, renseignez votre adresse mail ainsi que 
            votre mot de passe
          </p>
        </div>
        <div className="xl:mt-[3rem] xl:py-[0.25rem]">
          <form>
            <div className="input-container xl:mb-3 xl:w-[95%] xl:ml-[0.8rem] poppins-light">
              <input type="text" id="username" name="username" required
              className="form-control"
              placeholder="Votre nom d'utilisateur"/>
            </div>

            <div className="input-container xl:mb-3 xl:w-[95%] xl:ml-[0.8rem] xl:mt-[1.5rem] poppins-light">
              <input type="password" id="password" name="password" required
              className="form-control" 
              placeholder='Votre mot de passe'/>
            </div>

            <div className="xl:w-[15vw] xl:mt-[1rem] poppins-light">
              {/* Bouton de navigation */}
              <Link to="/redirectionpage">
                <button className="text-blue-700 xl:ml-[12rem]">Mot de passe oublié ?</button>
              </Link>
            </div>

            <div className="items-center xl:mt-[2rem] text-[1.15rem] poppins-light">
              <button type="submit" className="bg-black text-white xl:w-[10vw] xl:py-[0.25rem] rounded">Connexion</button>

              <div className="xl:mt-[0.5rem]">
                {/* Bouton de navigation */}
                <Link to="/signuppage">
                  <button className="bg-blue-700 text-white xl:ml-[12rem] xl:w-[10vw] xl:py-[0.25rem] rounded">S'inscrire</button>
                </Link>
              </div>
            </div>

          </form>
        </div>
      </div>

      {/* Div pour l'image */}
      <div className="xl:w-[40vw]">
        <img src={ImageLogin} alt="Image" className="xl:h-[85vh] rounded-br-[3rem] rounded-tr-[3rem]"/>
      </div>
    </div>
  );
}
