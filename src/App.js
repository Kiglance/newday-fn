import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Home from "./pages/Home/Home";
import Shopping from "./pages/Shopping/Shopping";
import Header from "./components/Headers/Header";
import Arrays from "./components/Headers/Arrays/Arrays";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} exact={true} />
      <Route path="/home/" element={<Home />} exact={true} />
      <Route path="/start_shopping/" element={<Shopping />} exact={true} />
      <Route path="/dev/" element={<Header />} exact={true} />
      <Route path="/arr/" element={<Arrays />} exact={true} />
    </Routes>
  );
}

export default App;
