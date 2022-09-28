import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const url = "http://localhost:8000/api/product";

const CreateProduct = () => {
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState(0);
  const [stock, setStock] = useState(0);

  const navigate = useNavigate();

  const store = async (e) => {
    e.preventDefault();
    await axios.post(url, { nombre: nombre, precio: precio, stock: stock });
    navigate("/");
  };

  return (
    <div>
      <h3>Crear Producto</h3>
      <form onSubmit={store}>
        <div className="m">
          <label className="form-label">Nombre</label>
          <input
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            type="text"
            className="form-control"
          ></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Precio</label>
          <input
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            type="number"
            className="form-control"
          ></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Stock</label>
          <input
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            type="number"
            className="form-control"
          ></input>
        </div>
        <button type="submit" className="btn btn-primary">
          Comprar
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
