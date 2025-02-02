import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Theory1 from "./Theory/2/Theory2";
const OrganicTheoryDirectory: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Theory1 />} />
        <Route path="/1" element={<Theory1 />} />
      </Routes>
    </Router>
  );
};

export default OrganicTheoryDirectory;
