import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./i18n";
import { ChatWidgetProvider } from "./context/ChatWidgetContext";
import Sidebar from "./components/layout/Sidebar";
import Footer from "./components/layout/Footer";
import LanguageToggle from "./components/layout/LanguageToggle";
import ChatWidget from "./components/sections/ChatWidget";
import Home from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage";
import "./App.css";

export default function App() {
  return (
    <LanguageProvider>
      <ChatWidgetProvider>
        <BrowserRouter>
          <div className="app">
            <Sidebar />
            <LanguageToggle />
            <main className="app__main">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/proyectos" element={<ProjectsPage />} />
              </Routes>
              <Footer />
            </main>
            <ChatWidget />
          </div>
        </BrowserRouter>
      </ChatWidgetProvider>
    </LanguageProvider>
  );
}
