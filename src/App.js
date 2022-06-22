import { Routes, Route } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Start from "./components/Start/Start";

function App() {
  return (
    <Routes>
      {/* <Route path="/start" element={<Landing />} /> */}
      <Route path="/" element={<Start />} exact={true} />
    </Routes>
  );
}

export default App;
