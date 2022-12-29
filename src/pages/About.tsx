import aboutImg from "/imgs/fruits/about.png";

const About = () => {
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
        <h1 style={{ fontWeight: 600 }}>SOBRE NOSOTROS</h1>
        <p>Somos un grupo de 4 jóvenes empresarios que luchan por su sueño.</p>
        <img src={aboutImg} width={500} style={{ marginTop: "2rem" }} />
      </section>
    </>
  );
};

export default About;
