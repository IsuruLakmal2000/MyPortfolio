import MainPage from "./Component/MainPage";
import OrganicQuest from "./Pages/Organic-privacy/OrganicquestPrivacyPolicy";
import TimeCountdown from "./Pages/TimeCountdown/TimecountdownPolicy";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/organic-quest" element={<OrganicQuest />} />
        <Route path="/timecountdown" element={<TimeCountdown />} />
      </Routes>
    </Router>
  );
}

export default App;
