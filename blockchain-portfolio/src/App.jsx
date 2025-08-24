import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Projects from "./pages/Projects";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import Header from "./components/Header";

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projekt" element={<Projects />} />
        <Route path="/kurser" element={<Courses />} />
        <Route path="/kontakta-mig" element={<Contact />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
