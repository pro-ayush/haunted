import "./App.css";
import Center from "./component/Center/Center";
import Cursor from "./component/cursor/cursor";
// import Footer from "./component/Footer/footer";
import Navbar from "./component/Navbar/navbar2";

function App() {
  return (
    <div className="App">
      <Cursor />
      <Navbar />
      <Center />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
