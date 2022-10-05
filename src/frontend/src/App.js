import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { TeamPage } from "./pages/TeamPage";
import { MatchPage } from "./pages/MatchPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/teams/:teamName" element={<TeamPage />} />
        </Routes>
        <Routes>
          <Route
            path="/teams/:teamName/matches/:year"
            element={<MatchPage />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
