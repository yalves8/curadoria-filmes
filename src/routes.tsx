import { BrowserRouter, Route, Routes } from "react-router-dom";
import Template from "./components/template";
import PaginaInicial from "./views/paginaInicial";

const RouteComponent = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <Template>
            <PaginaInicial />
          </Template>
        }
      />

      <Route
        path="*"
        element={<h1>A página que deseja acessar, não existe!</h1>}
      />
    </Routes>
  </BrowserRouter>
);
export default RouteComponent;
