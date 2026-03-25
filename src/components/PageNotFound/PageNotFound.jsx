
import "./PageNotFound.css";
import { useNavigate } from "react-router-dom";
function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div className="not-found">
      <h3 className="not-found__title">
        <span>404</span> - ¡Página no encontrada!
      </h3>
      <p className="not-found__text">
        ¡Uy! Aquí no hay nada... Lo sentimos. 🥺
      </p>
      <button type="button" onClick={() => navigate("/")}>
  Volver a la pagina principal
</button>
    </div>
  );
}

export default PageNotFound;