import "./App.css";
import CardList from "./CardList/CardList";
import Footer from "./Footer/Footer";
import Navbar from "./Header/Navbar";
import Tagline from "./Tagline/Tagline";
import Testimonials from "./Testimonials/Testimonials";

function App() {
  return (
    <div>
      <Navbar />
      <Tagline />
      <CardList />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
