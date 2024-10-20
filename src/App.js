import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import CalculatorComponent from "./Calculator/calculatorComponent";

function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route exact path="/" element={<CalculatorComponent />} />
      </Routes>
      </Router>
    </>
  );
}

export default App;