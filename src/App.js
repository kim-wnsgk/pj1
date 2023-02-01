import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './routes/Home.jsx'
import Main from "./routes/Main.js";
import Nodes from "./routes/Nodes.js";
import OverviewSummary from "./routes/OverviewSummary.js";


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
        <Route path="/overview/summary" element={<OverviewSummary />} />
        <Route path="/nodes" element={<Nodes />} />
      </Routes>
    </Router >
  );
}

export default App;
