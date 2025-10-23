import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import SkillListings from "./pages/SkillListings";
import SkillDetails from "./pages/SkillDetails";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="min-h-screen bg-light">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<SkillListings />} />

        <Route
          path="/skill/:skillId"
          element={
            <PrivateRoute>
              <SkillDetails />
            </PrivateRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />

        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
