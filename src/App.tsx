import MainPage from "./Component/MainPage";
import OrganicQuest from "./Pages/Organic-privacy/OrganicquestPrivacyPolicy";
import TimeCountdown from "./Pages/TimeCountdown/TimecountdownPolicy";
import OrganicTheory from "./Pages/Organic-theory/OrganicTheoryDirectory";
import Theory1 from "./Pages/Organic-theory/Theory/1/Theory1";
import Theory2 from "./Pages/Organic-theory/Theory/2/Theory2";
import Theory3 from "./Pages/Organic-theory/Theory/3/Theory3";
import Theory4 from "./Pages/Organic-theory/Theory/4/Theory4";
import Theory5 from "./Pages/Organic-theory/Theory/5/Theory5";
import Theory6 from "./Pages/Organic-theory/Theory/6/Theory6";
import Theory7 from "./Pages/Organic-theory/Theory/7/Theory7";
import Theory8 from "./Pages/Organic-theory/Theory/8/Theory8";
import Theory9 from "./Pages/Organic-theory/Theory/9/Theory9";
import Theory10 from "./Pages/Organic-theory/Theory/10/Theory10";
import Theory11 from "./Pages/Organic-theory/Theory/11/Theory11";
import Theory12 from "./Pages/Organic-theory/Theory/12/Theory12";
import Theory13 from "./Pages/Organic-theory/Theory/13/Theory13";
import Theory14 from "./Pages/Organic-theory/Theory/14/Theory14";
import Theory15 from "./Pages/Organic-theory/Theory/15/Theory15";
import Theory16 from "./Pages/Organic-theory/Theory/16/Theory16";
import Theory17 from "./Pages/Organic-theory/Theory/17/Theory17";
import Theory18 from "./Pages/Organic-theory/Theory/18/Theory18";
import Theory19 from "./Pages/Organic-theory/Theory/19/Theory19";
import Theory20 from "./Pages/Organic-theory/Theory/20/Theory20";
import Theory21 from "./Pages/Organic-theory/Theory/21/Theory21";
import Theory22 from "./Pages/Organic-theory/Theory/22/Theory22";
import Theory23 from "./Pages/Organic-theory/Theory/23/Theory23";
import Theory24 from "./Pages/Organic-theory/Theory/24/Theory24";
import Theory25 from "./Pages/Organic-theory/Theory/25/Theory25";
import Theory26 from "./Pages/Organic-theory/Theory/26/Theory26";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/organic-quest" element={<OrganicQuest />} />
        <Route path="/timecountdown" element={<TimeCountdown />} />
        <Route path="/organic-theory/1" element={<Theory1 />} />
        <Route path="/organic-theory/2" element={<Theory2 />} />
        <Route path="/organic-theory/3" element={<Theory3 />} />
        <Route path="/organic-theory/4" element={<Theory4 />} />
        <Route path="/organic-theory/5" element={<Theory5 />} />
        <Route path="/organic-theory/6" element={<Theory6 />} />
        <Route path="/organic-theory/7" element={<Theory7 />} />
        <Route path="/organic-theory/8" element={<Theory8 />} />
        <Route path="/organic-theory/9" element={<Theory9 />} />
        <Route path="/organic-theory/10" element={<Theory10 />} />
        <Route path="/organic-theory/11" element={<Theory11 />} />
        <Route path="/organic-theory/12" element={<Theory12 />} />
        <Route path="/organic-theory/13" element={<Theory13 />} />

        <Route path="/organic-theory/14" element={<Theory14 />} />
        <Route path="/organic-theory/15" element={<Theory15 />} />
        <Route path="/organic-theory/16" element={<Theory16 />} />
        <Route path="/organic-theory/17" element={<Theory17 />} />
        <Route path="/organic-theory/18" element={<Theory18 />} />
        <Route path="/organic-theory/19" element={<Theory19 />} />
        <Route path="/organic-theory/20" element={<Theory20 />} />
        <Route path="/organic-theory/21" element={<Theory21 />} />
        <Route path="/organic-theory/22" element={<Theory22 />} />
        <Route path="/organic-theory/23" element={<Theory23 />} />
        <Route path="/organic-theory/24" element={<Theory24 />} />
        <Route path="/organic-theory/25" element={<Theory25 />} />
        <Route path="/organic-theory/26" element={<Theory26 />} />
      </Routes>
    </Router>
  );
}

export default App;
