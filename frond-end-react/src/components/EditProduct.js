import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const url = "http://localhost:8000/api/product/";

const EditProduct = () => {
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState(0);
  const [stock, setStock] = useState(0);

  const navigate = useNavigate();

  const { id } = useParams();

  const update = async (e) => {
    e.preventDefault();

    await axios.put(`${url}${id}`, {
      nombre: nombre,
      precio: precio,
      stock: stock,
    });

    navigate("/");
  };

  useEffect(() => {
    const getProductById = async () => {
      const response = await axios.get(`${url}${id}`);
      setNombre(response.data.nombre);
      setPrecio(response.data.precio);
      setStock(response.data.stock);
    };
    getProductById();
  }, []);

  return (
    <div>
      <h3>Edit Product</h3>
      <form onSubmit={update}>
        <div className="mb-3">
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
          Update
        </button>
      </form>
    </div>
  );
};

export default EditProduct;
