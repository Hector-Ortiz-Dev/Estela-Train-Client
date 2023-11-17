import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import JourneyFormPage from "./pages/JourneyFormPage";
import JourneysPage from "./pages/JourneysPage";
import ProfilePage from "./pages/Profile/ProfilePage";
import SchedulePage from "./pages/SchedulePage";
import PassengersPage from "./pages/PassengersPage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";

import ProtectedRoute from "./ProtectedRoute";
import { JourneyProvider } from "./context/JourneyContext";
import { CityProvider } from "./context/CityContext";
// import { TicketProvider } from "./context/TicketContext";
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
                <Route path="*" element={<NotFoundPage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/add-journey" element={<JourneyFormPage />} />
                <Route path="/journeys/:id" element={<JourneyFormPage />} />
                <Route path="/passengers" element={<PassengersPage />} />

                <Route element={<ProtectedRoute />}>
                  <Route path="/journeys" element={<JourneysPage />} />
                  <Route path="/profile" element={<ProfilePage />} />
                  <Route path="/schedule" element={<SchedulePage />} />
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
