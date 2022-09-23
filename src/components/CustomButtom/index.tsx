import "./styles.css";

const CustomButtom = () => {
  return (
    <div className="btn-container">
      <div className="field-search-container">
        <input type="text" placeholder="Digite sua busca" />
      </div>
      <div className="btn-search-container">
        <button>Buscar</button>
      </div>
    </div>
  );
};

export default CustomButtom;
