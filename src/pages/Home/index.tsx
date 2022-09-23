import "./styles.css";
import { ReactComponent as MainImage } from "assets/images/car-banner.svg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container container">
      <div className="card-container">
        <div className="home-image-container">
          <MainImage />
        </div>
        <div className="home-content">
          <h2>O Carro perfeito para você</h2>
          <p>
            Conheça nossos carros e dê mais um passo na realização do seu sonho
          </p>
        </div>
      </div>

      <div className="main-container">
        <div>
          <Link to="/catalog">
            <button>Ver catálogo</button>
          </Link>
        </div>
        <div>
          <h2>Comece agora a navegar</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
