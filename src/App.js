import "./App.css";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./components/Login";

function App() {
  return (
    <div className="app m-auto">
      <Header />
      <Login />
      <Content/>
      <Footer />
    </div>
  );
}

export default App;
