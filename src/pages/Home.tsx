import { Link } from "react-router-dom";
import basket from "/imgs/fruits/basket.jpg";

const Home = () => {
  return (
    <>
      <section
        style={{
          display: "grid",
          placeItems: "center",
          marginTop: "5rem",
          fontFamily: "Poppins",
        }}
      >
        <h1 style={{ fontWeight: 600 }}>FRUIT SHOP</h1>
        <p
          style={{
            fontSize: "16px",
          }}
        >
          Aquí podrás encontrar una gran variedad de tus frutas favoritas.
        </p>
        <img src={basket} alt="" />
        <Link to="/Store">
          <input
            type="button"
            value="Comprar ya"
            style={{
              backgroundColor: "#212529",
              color: "#fff",
              padding: "0.5rem",
              width: "170px",
            }}
          />
        </Link>
      </section>

      <section></section>
    </>
  );
};

export default Home;
