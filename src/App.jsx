import Analytics from "./components/Analytics";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/navbar";
import Newsletter from "./components/Newsletter";

function App() {
  return (
    <div>
      <Navbar />
      <Hero id="hero" />
      <Analytics id="analytics" />
      <Newsletter id="newsletter" />
      <Cards id="cards" />
      <Footer id="footer" />
    </div>
  );
}

export default App;
