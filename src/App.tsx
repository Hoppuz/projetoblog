import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/home";
import Login from "./pages/login/login";
import Posts from "./pages/home/posts";
import NavBar from "./components/navbar";
import Dashboard from "./pages/dashboard/dashboard";

function App() {
  return (
    <BrowserRouter>
      <div style={styles.routeStl}>
        <NavBar />
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
      </div>
    </BrowserRouter>
  );
}

export default App;

const styles: Record<string, React.CSSProperties> = {
  routeStl: {
    width: window.innerWidth,
    height: window.innerHeight,
    margin: 0,
    alignItems: "center",
    textAlign: "center",
    flex: 1,
  },
};
