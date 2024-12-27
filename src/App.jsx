import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { DarkModeProvider } from "./DarkModeContext"; // Import the context
import Home from "./Home";
import University from "./University";
import Academics from "./Academics";
import Features from "./Features";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Login from "./Login";
import Menu from "./Menu";

function AppContent() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  return (
    <>
      {!isLoginPage && <Navbar />}
      {!isLoginPage && <Menu />}
      <Routes>
        <Route index element={<Home />} />
        <Route path="/university" element={<University />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/features" element={<Features />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {!isLoginPage && <Footer />}
    </>
  );
}

function App() {
  return (
    <DarkModeProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </DarkModeProvider>
  );
}

export default App;