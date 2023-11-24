import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import JourneyFormPage from "./pages/JourneyFormPage";
import JourneysPage from "./pages/JourneysPage";
import ProfilePage from "./pages/profile/ProfilePage";
import MyJourneysPage from "./pages/profile/MyJourneysPage";
import MyPaymentMethods from "./pages/profile/MyPaymentMethods";
import MethodsFormPage from "./pages/profile/MethodsFormPage";
import SchedulePage from "./pages/SchedulePage";
import PassengersPage from "./pages/PassengersPage";
import PaymentPage from "./pages/PaymentPage";
import TicketPage from "./pages/TicketPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";

import FormTest from "./pages/test/FormTest";

import ProtectedRoute from "./ProtectedRoute";
import { JourneyProvider } from "./context/JourneyContext";
import { CityProvider } from "./context/CityContext";
import { PaymentProvider } from "./context/PaymentContext";
import { TicketProvider } from "./context/TicketContext";
import { PayMethodProvider } from "./context/PayMethodsContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <AuthProvider>
      <JourneyProvider>
        <CityProvider>
          <PaymentProvider>
            <TicketProvider>
              <PayMethodProvider>
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
                      <Route
                        path="/add-journey"
                        element={<JourneyFormPage />}
                      />
                      <Route
                        path="/journeys/:id"
                        element={<JourneyFormPage />}
                      />

                      {/* Testing */}
                      <Route path="/form-test" element={<FormTest />} />

                      <Route element={<ProtectedRoute />}>
                        <Route path="/journeys" element={<JourneysPage />} />
                        <Route path="/profile" element={<ProfilePage />} />
                        <Route
                          path="/myjourneys"
                          element={<MyJourneysPage />}
                        />
                        <Route
                          path="/paymentmethods"
                          element={<MyPaymentMethods />}
                        />
                        <Route
                          path="/add-paymentmethods"
                          element={<MethodsFormPage />}
                        />
                        <Route path="/schedule" element={<SchedulePage />} />
                        <Route
                          path="/passengers"
                          element={<PassengersPage />}
                        />
                        <Route path="/payment" element={<PaymentPage />} />
                        <Route path="/tickets/:id" element={<TicketPage />} />
                      </Route>
                    </Routes>
                  </main>
                  <Footer />
                </BrowserRouter>
              </PayMethodProvider>
            </TicketProvider>
          </PaymentProvider>
        </CityProvider>
      </JourneyProvider>
    </AuthProvider>
  );
}

export default App;
