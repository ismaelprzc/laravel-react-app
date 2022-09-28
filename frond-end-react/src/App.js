/* import logo from './logo.svg'; */
import "./App.css";
import ShowProducts from "./components/ShowProducts";
import CreateProduct from "./components/CreateProduct";
import EditProduct from "./components/EditProduct"; 
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ShowProducts />}></Route>
          <Route path="/create" element={<CreateProduct />}></Route>
         { <Route path="/edit/:id" element={<EditProduct />}></Route> }
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
