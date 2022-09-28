import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const url = "http://localhost:8000/api";

const ShowProducts = () => {
  //devuelve el valor, hace referencia al products al setProducts para actualizar
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  //async await
  const getAllProducts = async () => {
    const response = await axios.get(`${url}/products`);
    setProducts(response.data);
  };

  const deleteProduct = async (id) => {
    await axios.delete(`${url}/product/${id}`);
    getAllProducts();
  };

  return (
    <div>
      <div className="d-grid gap-2">
        <Link
          to="/create"
          className="btn btn-success btn-lg mt-2 mb-2 text-white"
        >
          Añadir producto
        </Link>
      </div>
      <table className="table table-striped">
        <thead className="bg-primary text-white">
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Botones</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.nombre}</td>
              <td>{product.precio}</td>
              <td>{product.stock}</td>
              <td>
                <Link to={`/edit/${product.id}`} className="btn btn-warning">
                  Editar
                </Link>
                <button
                  onClick={() => deleteProduct(product.id)}
                  className="btn btn-danger"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowProducts;
