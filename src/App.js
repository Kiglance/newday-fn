import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Home from "./pages/Home/Home";
import Shopping from "./pages/Shopping/Shopping";
import Header from "./components/Headers/Header";
import Arrays from "./components/Headers/Arrays/Arrays";
import Shop from "./pages/shop/Shop";
import ShopOne from "./pages/shop/ShopOne";
import OneCategory from "./pages/shop/OneCategory";
import OneClasses from "./pages/shop/OneClasses";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} exact={true} />
      <Route path="/home/" element={<Home />} exact={true} />
      <Route path="/start_shopping/" element={<Shopping />} exact={true} />
      <Route path="/dev/" element={<Header />} exact={true} />
      <Route path="/arr/" element={<Shop />} exact={true} />
      <Route path="/product/:id/" element={<ShopOne />} exact={true} />
      <Route path="/category/:id/" element={<OneCategory />} exact={true} />
      <Route
        path="/category/class/:id/"
        element={<OneClasses />}
        exact={true}
      />
    </Routes>
  );
}

export default App;
