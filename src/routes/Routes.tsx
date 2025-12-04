import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Practice from "@/pages/Practice";
import People from "@/pages/People";

export default function AppRoutes() {
    return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/people" element={<People />} />
          <Route path="/people/:id" element={<People />} />
        </Routes>
      </Layout>
    </BrowserRouter>
    )
}