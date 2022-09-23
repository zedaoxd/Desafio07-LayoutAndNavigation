import "./styles.css";

import CarImage from "assets/images/car.png";
import BaseButtom from "components/BaseButtom";

const CardCar = () => {
  return (
    <div className="card-container-card">
      <div className="image-container-card">
        <img src={CarImage} alt="Carro Audi TT vermelho" />
      </div>
      <div className="content-container-card">
        <h2>Audi Supra TT</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          expedita fugit
        </p>
        <BaseButtom />
      </div>
    </div>
  );
};

export default CardCar;
