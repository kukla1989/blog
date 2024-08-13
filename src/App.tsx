import "./App.scss";
import Header from "./components/Header/Header";
import MainPage from "./components/MainPage/MainPage";

function App() {
  return (
    <div className="app">
      <div className="container">
        <Header />
        <MainPage />
      </div>
    </div>
  );
}

export default App;
