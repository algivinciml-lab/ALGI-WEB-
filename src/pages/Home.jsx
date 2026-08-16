import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Achievement from "../components/Achievement/Achievement";
import Portfolio from "../components/Portfolio/Portfolio";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Achievement />
      <Portfolio />
    </>
  );
}

export default Home;