import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="d-flex align-items-center justify-content-center mt-5">
      <div className="text-center">
        <h1 className="display-1 fw-bold">404</h1>
        <p className="fs-3">
          <span className="text-danger">Oops!</span> Página no encontrada
        </p>
        <p className="lead">La página que estabas buscando no existe.</p>
        <Link to="/store" className="btn btn-primary">
          Volver a la tienda
        </Link>
      </div>
    </div>
  );
};

export default Error;
