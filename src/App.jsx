import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Benefits from "./components/Benefits/Benefits";
import PricingOptions from "./components/PricingOptions/PricingOptions";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Benefits />
        <PricingOptions />
        <FAQ />
      </main>

      <Footer />
    </>
  );
}

export default App;
