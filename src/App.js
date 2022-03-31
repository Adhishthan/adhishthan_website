import { useContext } from "react";
import "./App.css";
import Footer from "./app/components/Footer/footer";
import Header from "./app/components/Header/Header";
import Home from "./app/components/Home/home";

function App() {
  useContext(() => {
    console.log("AppEvent Raised.");
  }, []);
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
