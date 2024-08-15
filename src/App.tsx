import { Outlet } from "react-router-dom";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="app">
      <div className="container">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default App;
