import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './routes/Home.jsx'
import Main from "./routes/Main.js";
import OverviewSummary from "./routes/OverviewSummary.js";
import Nodes from "./routes/Nodes.js";
import NodesDetail from "./routes/NodesDetail.js";
import ResourcesPods from "./routes/ResourcesPods.js";
import ResourcesPodsDetail from "./routes/ResourcesPodsDetail.js";


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Home />} />
        <Route path="/overview/summary" element={<OverviewSummary />} />
        <Route path="/nodes" element={<Nodes />} />
        <Route path="/nodes/detail/:name" element={<NodesDetail />} />
        <Route path="/resources/pods" element={<ResourcesPods />} />
        <Route path="/resources/pods/:name" element={<ResourcesPodsDetail />} />
      </Routes>
    </Router >
  );
}

export default App;
