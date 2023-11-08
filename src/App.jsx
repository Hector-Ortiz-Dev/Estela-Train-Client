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
import { CityProvider } from "./context/CityContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <AuthProvider>
      <JourneyProvider>
        <CityProvider>
          <BrowserRouter>
            <Navbar />
            <main className="container mx-auto px-10">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/add-journey" element={<JourneyFormPage />} />
                <Route path="/journeys/:id" element={<JourneyFormPage />} />

                <Route element={<ProtectedRoute />}>
                  <Route path="/journeys" element={<JourneysPage />} />
                  <Route path="/profile" element={<ProfilePage />} />
                </Route>
              </Routes>
            </main>
            <Footer />
          </BrowserRouter>
        </CityProvider>
      </JourneyProvider>
    </AuthProvider>
  );
}

export default App;
