import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainPage from "./components/MainPage/MainPage";

function App() {
  return (
    <div className="app">
      <div className="container">
        <Header />
        <MainPage />
        <Footer />
      </div>
    </div>
  );
}

export default App;
