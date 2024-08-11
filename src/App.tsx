import "./App.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";


function App() {
  return (
    <div className="app">
      <div className="container">
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;
