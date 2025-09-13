import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login/login";
import Dashboard from "./pages/dashboard/dashboard";
import Navbar from "./components/navbar/navbar";
import Posts from "./pages/posts/posts";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main
        style={{
          padding: "24px",
          margin: "0 auto",
          marginTop: "70px",
          minHeight: "calc(100vh - 70px)",
          boxSizing: "border-box",
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/posts/:id" element={<Posts />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
