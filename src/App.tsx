import { BrowserRouter, Route, Routes, } from "react-router"
import Home from "./pages/home"
import Login from "./pages/login/login"
import Dashboard from "./pages/dashboard/dashboard"

function App() {
  return <BrowserRouter>
    <div
      style={{
        backgroundColor: "red",
        width: window.innerWidth,
        height: window.innerHeight,
      }}>
    
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
    </div>
  </BrowserRouter>
}

export default App
