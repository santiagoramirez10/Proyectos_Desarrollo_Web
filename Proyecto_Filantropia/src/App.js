import { useEffect, useState } from "react";
import About from "./components/About";
import Causes from "./components/Causes";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
    window.scrollTo({
      top: 0,
    });
  }, []);

  if (loading) {
    return (
      <div id="pageloader">
        <div class="loader-item">
          <div class="loader">
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="inicio">
      <Hero />
      <About />
      <Causes />
      <Testimonials />
    </div>
  );
}

export default App;
