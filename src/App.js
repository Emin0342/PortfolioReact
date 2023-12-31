import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";
import Particles from "./components/Particles";

function App() {
  const personalDetails = {
    name: "CORUMLU Emin",
    location: "Loire (42000)",
    email: "cor.pro03@gmail.com",
    availability: "Dès que possible !",
    brand:
      "Ayant obtenu mon BTS SIO avec une moyenne de 15.03, je suis à la recherche d’une entreprise prête à m’accueillir en tant qu’alternant pour une durée d’un an en vue d’un futur BAC +3 RPI (Responsable de Projets Informatiques) à ISITECH Lyon dans un rythme de 3 semaines en entreprise / 1 semaine à l'école.",
  };

  return (
    <>  
       <Particles />
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
