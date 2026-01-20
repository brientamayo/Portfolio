import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import AnimatedRoutes from "./AnimatedRoutes.jsx";
import './index.css';

function App() {
  return (
    <section className="w-screen min-h-screen bg-slate-900">
      <Router>
        <Navbar />
        <AnimatedRoutes />
      </Router>
    </section>
  );
}

export default App;
