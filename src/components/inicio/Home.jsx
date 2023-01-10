import perfil from "../../assets/perfil.jpeg";
import { Social, Data, ScrollDown } from "..";

const Home = () => {
  return (
    <section className="home section" id="inicio">
      <div className="home-container container grid">
        <div className="home-content grid">
          <Social />
          <div
            className="home-img"
            style={{ backgroundImage: `url(${perfil})` }}
          ></div>
          <Data />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
