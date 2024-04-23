import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Detail from "./components/Detail";
import WorldMap from "./components/WorldMap";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<WorldMap />}></Route>
        <Route path="/detail/:countryCode" exact element={<Detail />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
