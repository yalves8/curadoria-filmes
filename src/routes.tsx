import { BrowserRouter, Route, Routes } from "react-router-dom";

const RouteComponent = () => {
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<p>Oi</p>} />
    </Routes>
    <Route
      path="*"
      element={<h1>A página que deseja acessar, não existe!</h1>}
    />
  </BrowserRouter>;
};

export default RouteComponent;
