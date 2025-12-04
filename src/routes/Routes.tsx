import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Practice from "@/pages/Practice";
import People from "@/pages/People";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/practice" element={<Practice />} />
                <Route path="/people/:id" element={<People />} />
            </Routes>
        </BrowserRouter>
    )
}