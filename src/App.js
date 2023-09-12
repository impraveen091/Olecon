// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Home from "./components/Home";
import About from "./components/About";
import LanguageSwitcher from "./components/LanguageSwitcher";
function App() {
  const { t } = useTranslation();
  return (
    <Router>
      <LanguageSwitcher />
      <nav>
        <ul style={{ columnGap: "50px", display: "flex" }}>
          <div>
            <Link to="/">{t("home")}</Link>
          </div>
          <div>
            <Link to="/about">{t("about")}</Link>
          </div>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
export default App;
