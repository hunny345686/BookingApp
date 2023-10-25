import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { SearchContextProvider } from "./context/SearchContext";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthContextProvider>
      <SearchContextProvider>
        <Navbar />
        <Outlet />
        <Footer />
      </SearchContextProvider>
    </AuthContextProvider>
  );
}

export default App;
