import Typewriter from "typewriter-effect";
import SocialIcons from "../../components/SocialIcons";

const Landing = ({ name }) => {
  const styles = {
    landing: {
      height: "calc(100% - 93px)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },

    landingImage: {
      position: "absolute",
      bottom: "0",
      opacity: "0.3",
      mixBlendMode: "lighten",
      height: "80%",
    },

    textContainer: {
      display: "flex",
      flexDirection: "column",
      letterSpacing: "1px",
      textAlign: "center",
      zIndex: "1",
      color: "#fff",
      textShadow: "1px 1px 3px #000",
    },

    name: {
      color: "#fff",
      fontWeight: "700",
      marginTop: "-100px",
      paddingBottom: "28px",
    },
  };

  return (
    <section className="landing" style={styles.landing}>
      <div className="textContainer" style={styles.textContainer}>
        <h1 className="name" style={styles.name}>
          {name}
        </h1>
        <div className="description">
          <Typewriter
          options={{
            autoStart: true,
            loop: true,
          }}
            className="description"
            onInit={(typewriter) => {
              typewriter
                .changeDelay(80)
                .typeString("Actuellement a la recherche d'une alternance")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Je suis motivé.")
                .pauseFor(1000)
                .deleteChars(8)
                .typeString(" assidu.")
                .pauseFor(1000)
                .deleteChars(8)
                .typeString(" respectueux.")
                .pauseFor(1000)
                .deleteChars(13)
                .typeString(" autonome.")
                .pauseFor(1000)
                .start();
            }}
          />
        </div>
      </div>
     
      <SocialIcons />
    </section>
  );
};

export default Landing;
