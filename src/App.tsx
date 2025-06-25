import { Dashboard } from "./components/Dashboard";
import { NavBar } from "./components/Navigation/NavBar/Navbar";

function App() {
  return (
    <>
      <NavBar>
        <Dashboard />
      </NavBar>
    </>
  );
}

export default App;
