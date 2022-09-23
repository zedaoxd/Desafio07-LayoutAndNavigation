import CustomButtom from "components/CustomButtom";
import "./styles.css";
import CardCar from "components/CardCar";

const Catalog = () => {
  return (
    <>
      <div className="container my-4">
        <div className="search-container">
          <CustomButtom />
        </div>
        <div className="row">
          <div className="col-sm-6 col-lg-4">
            <CardCar />
          </div>

          <div className="col-sm-6 col-lg-4">
            <CardCar />
          </div>

          <div className="col-sm-6 col-lg-4">
            <CardCar />
          </div>

          <div className="col-sm-6 col-lg-4">
            <CardCar />
          </div>

          <div className="col-sm-6 col-lg-4">
            <CardCar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Catalog;
