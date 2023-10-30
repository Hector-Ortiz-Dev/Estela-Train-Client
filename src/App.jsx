import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import JourneyFormPage from "./pages/JourneyFormPage";
import JourneysPage from "./pages/JourneysPage";
import ProfilePage from "./pages/ProfilePage";

import ProtectedRoute from "./ProtectedRoute";
import { JourneyProvider } from "./context/JourneyContext";
import Navbar from "./components/navbar";

function App() {
  return (
    <AuthProvider>
      <JourneyProvider>
        <BrowserRouter>
          <main className="container mx-auto px-10">
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/add-journey" element={<JourneyFormPage />} />
              <Route path="/journey/:id" element={<h1>Journey</h1>} />

              <Route element={<ProtectedRoute />}>
                <Route path="/journeys" element={<JourneysPage />} />
                <Route path="/profile" element={<ProfilePage />} />
              </Route>
            </Routes>
          </main>
        </BrowserRouter>
      </JourneyProvider>
    </AuthProvider>
  );
}

export default App;
